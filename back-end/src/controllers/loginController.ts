import { Request, Response } from "express";
import User from "../models/userModel";
import { generateToken, clearToken } from "../utils/auth";

export const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(req.cookies["jwt-access-key"]);

  if (user && user.comparePassword(password)) {
    generateToken(res, user._id);
    res.status(201).json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: "User not found / password incorrect" });
  }
};
