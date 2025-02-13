import 'dotenv/config'
import { Product } from "../models/Product";
import { DataSource } from "typeorm";


const DATABASE_URL = process.env.DATABASE_URL || process.env.DATABASE_LOCAL;



export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL,
  entities: [Product],
  synchronize: false,
  logging: true,
});
