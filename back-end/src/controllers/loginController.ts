import { Request, Response } from "express";
import User from "../models/userModel";
import { generateToken, clearToken } from "../utils/auth";

export const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    let isMatch = await user.comparePassword(password);
    if (isMatch) {
      let token = generateToken(res, user._id);
      res.set({
        "Access-Control-Expose-Headers": "Authorization",
      });

      res.set("Authorization", `Bearer ${token}`);
      // console.log(
      //   `${process.env.FRONT_END_CALLBACK_URI}?token=${token}&email=${user.email}&username=${user.name}`
      // );
      // res.redirect(
      //   `${process.env.FRONT_END_CALLBACK_URI}?token=${token}&email=${user.email}&username=${user.name}`
      // );

      res.status(201).json({
        name: user.name,
        email: user.email,
      });
      // res.send({
      //   name: user.name,
      //   email: user.email,
      // })
    } else {
      res.status(401).json({ message: "User not found / password incorrect" });
    }
  }
};
