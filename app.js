const express = require('express');
const app = express();

const corsOptions = {
    origin: 'https://vajillaymanteleriazonaoeste.netlify.app',  // Ajusta con tu dominio exacto
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };
  
  app.use(cors(corsOptions));

app.use('/', require('./router'));

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
})