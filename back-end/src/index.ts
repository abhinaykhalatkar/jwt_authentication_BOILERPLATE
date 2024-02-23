import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter";
import bodyParser from "body-parser";
import cors from "cors";
import connectUserDB from "./connections/userDB";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3010;

connectUserDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(authRouter);
app.use(bodyParser.json());
