import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.routes.js";
import bodyParser from "body-parser"

const app = express();


// middlewareS
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// const response = await openai.listEngines();

app.use("/api/v1", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to ` + `http://localhost:${PORT}`.yellow.underline);
});
