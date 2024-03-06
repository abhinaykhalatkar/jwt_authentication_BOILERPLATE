import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/userModel";
import asyncHandler from "express-async-handler";
import { clearToken } from "../utils/auth";

export const initialAuthenticate = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const token = req.headers["authorization"]
        ? req.headers["authorization"].split(" ")[1]
        : "";

      if (!token) {
        clearToken(res);
        return;
      }

      const jwtSecret = process.env.JWT_SECRET || "";

      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

      if (!decoded || !decoded.userId) {
        clearToken(res);
        return;
      }

      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        clearToken(res);
        return;
      }

      const user = await User.findOne({ _id: decoded.userId });
      if (!user) {
        clearToken(res);
        return;
      }

      if (user && user.name)
        res.status(201).json({
          // id: user._id,
          name: user.name,
          email: user.email,
        });
    } catch (e) {
      res.status(309).json({ message: "Error with request" });
      // throw console.log("Invalid token");
    }
  }
);
