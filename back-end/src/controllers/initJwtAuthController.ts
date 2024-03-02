import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/userModel";
import asyncHandler from "express-async-handler";
import { clearToken } from "../utils/auth";

export const initialAuthenticate = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let token = req.cookies["jwt-access-key"];

      if (!token) {
        clearToken(res, false);
      }

      const jwtSecret = process.env.JWT_SECRET || "";
      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

      if (!decoded || !decoded.userId) {
        clearToken(res, true);
        return;
      }

      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        clearToken(res, true);
        return;
      }

      const user: { name: string; email: string; password: string } | null =
        await User.findOne({ _id: decoded.userId });

      if (!user) {
        clearToken(res, true);
        return;
      }

      if (user && user.name)
        res.status(201).json({
          // id: user._id,
          name: user.name,
          email: user.email,
        });
    } catch (e) {
      throw console.log("Invalid tokens");
    }
  }
);
