const express = require('express');
const connectDB = require('./database/db');
const productRoutes = require('./router');
const app = express();
const cors = require('cors'); 


const port = process.env.PORT || 5001;

const corsOptions = {
  origin: ['https://vajillaymanteleriazonaoeste.netlify.app', 'http://localhost:5173'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

connectDB();

app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
