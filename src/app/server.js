import express, { json } from "express";
import cors from "cors";
import authRoutes from "../app/routes/authRoutes.js";
import { connectDb } from './config/db.config.js';

const app = express();
const PORT = parseInt(`${process.env.PORT || 3000}`);


app.use(cors);
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Web API listening on port ${PORT}`)
})  