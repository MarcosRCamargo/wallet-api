import express, { json } from "express";
import authRoutes from "../app/routes/authRoutes.js";
const app = express()
const port = 3000
app.use(json());
app.use(authRoutes);

app.listen(port, () => {
  console.log(`Web API listening on port ${port}`)
})  