import { Request, Response } from "express";
import User from "../models/userModel";
import { generateToken } from "../utils/auth";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "The user already existss" });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "An error occurred in creating the user" });
  }
};
