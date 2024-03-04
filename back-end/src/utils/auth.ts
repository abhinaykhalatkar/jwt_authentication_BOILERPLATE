import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (res: Response, userId: string) => {
  const jwtSecret = process.env.JWT_SECRET || "";

  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "1h",
  });
  // res.cookie("jwt-access-key", token, {
  //   httpOnly: false,
  //   secure: true,
  //   sameSite: "lax",
  //   maxAge: 60 * 60 * 1,
  // });
  return token;
};

const clearToken = (res: Response) => {
  res.status(200).json({ name: "", email: "" });
};

export { generateToken, clearToken };
