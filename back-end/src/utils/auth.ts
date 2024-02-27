import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (res: Response, userId: string) => {
  const jwtSecret = process.env.JWT_SECRET || "";

  const token = jwt.sign({ userId }, jwtSecret, {
    expiresIn: "24h",
  });

  res.cookie("jwt-access-key", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
  });
  return token;
};

const clearToken = (res: Response, clearCookie: boolean) => {
  res.status(401).json({ name: "", email: "" });
  if (clearCookie) {
    res.cookie("jwt-access-key", "", {
      httpOnly: true,
      expires: new Date(0),
    });
  }
};

export { generateToken, clearToken };
