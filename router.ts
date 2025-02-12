import express, { Request, Response } from "express";
const router = express.Router();
import { Product } from "./models/Product"; 
import { AppDataSource } from "database/db";

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await AppDataSource.getRepository(Product).find();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener los productos: ", error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
});

export default router;
