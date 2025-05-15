import express from 'express'
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./router.js";
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

const initialize = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(`DB connected successfully`);
  } catch (error) {
    console.error(`Failed connecting to DB, ${error.message}`);
  }

  app.use(router);
};

initialize();

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
