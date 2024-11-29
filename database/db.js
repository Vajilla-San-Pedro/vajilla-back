const mongoose = require("mongoose");
require("dotenv").config(); // Cargar las variables de entorno desde .env
const Product = require("../models/Product"); // Asegúrate de que el path sea correcto

// La URI de conexión que obtuviste de MongoDB Atlas
const uri = process.env.MONGO_URI;

// Función para conectar a la base de datos con Mongoose
const connectDB = async () => {
  try {
    // Conectar con la base de datos
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Termina el proceso si la conexión falla
  }
};

// Exportar la función de conexión
module.exports = connectDB;
