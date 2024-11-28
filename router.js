const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

router.get('/products', (req, res) => {
    conexion.query('SELECT * FROM products', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows);
        }
    });
}
);

module.exports = router;