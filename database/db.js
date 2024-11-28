const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "vajilla",
});

conexion.connect((err) => {
    if (err) {
      console.log("Error en la conexion a la base de datos.");
      return;
    }
    console.log("Conectado a la base de datos");
  });

module.exports = conexion;
