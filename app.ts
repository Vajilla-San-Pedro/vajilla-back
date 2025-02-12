import express from "express";
import { AppDataSource } from "./database/db";
import productRoutes from "./router";
const app = express();
import cors from "cors";

const port = process.env.PORT || 5002;

const corsOptions = {
  origin: [
    "https://vajillaymanteleriazonaoeste.netlify.app",
    "http://localhost:5173",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

try {
  AppDataSource.initialize();
  console.log("Database initialized");
} catch (error) {
  console.log("Error initializing the database", error);
}


app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
