const express = require('express');
const router = express.Router();
const Product = require('./models/Product');

router.get('/', async (req, res) => {
    try {
      console.log('Realizando consulta de productos...');
      const products = await Product.find();
      console.log('Productos encontrados:', products);
      if (products.length === 0) {
        return res.status(404).json({ message: 'No hay productos' });
      }
      res.json(products);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      res.status(500).json({ message: 'Error al obtener productos' });
    }
});

module.exports = router;