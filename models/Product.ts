import "reflect-metadata";  
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })  // Especifica el tipo de la columna
  name: string;

  @Column({ type: "float" })  // Especifica el tipo de la columna
  price: number;

  @Column({ type: "varchar" })  // Especifica el tipo de la columna
  brand: string;

  @Column({ type: "varchar" })  // Especifica el tipo de la columna
  img: string;
}
