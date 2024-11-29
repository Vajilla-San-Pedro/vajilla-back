const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: false },
  price: { type: Number, required: true },
  img: { type: String, required: true }
  // Puedes omitir el campo 'id' ya que MongoDB asigna automáticamente _id
});

// Crear el modelo a partir del esquema
const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
