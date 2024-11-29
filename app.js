const express = require('express');
const connectDB = require('./database/db');
const productRoutes = require('./router');   // Asegúrate de que este archivo tenga la ruta correcta
const app = express();
const cors = require('cors'); // Importa el paquete cors


const port = process.env.PORT || 5001;

// Configuración de CORS
const corsOptions = {
  origin: ['https://vajilla-front.onrender.com', 'http://localhost:5173'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// Conectar a la base de datos
connectDB();

// Usar el prefijo '/products' para las rutas de productos
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
