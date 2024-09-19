import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from './routers/auth.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

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