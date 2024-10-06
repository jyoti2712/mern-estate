import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routers/user.route.js'
import authRouter from './routers/auth.route.js';
import cookieParser from "cookie-parser";
import { verifyToken } from "./utils/verify.User.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

app.use('/server/user', userRouter);
app.use('/server/auth', authRouter)

app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statuscode).json({
    success: false,
    statuscode,
    message,
  });
});