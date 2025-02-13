import express from "express";
import { AppDataSource } from "./database/db.js";
import productRoutes from "./router.js";
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

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing the database", error);
  });

app.use("/products", productRoutes);
