const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "vajilla",
});

// Conectar a la base de datos
function connectToDatabase() {
  conexion.connect((err) => {
    if (err) {
      console.log("Error en la conexión a la base de datos:", err);
      setTimeout(connectToDatabase, 2000); 
    } else {
      console.log("Conectado a la base de datos");
    }
  });
}

conexion.on('error', (err) => {
  console.error("Error en la base de datos:", err);
  if (err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
    console.log('Reconectando a la base de datos...');
    conexion.destroy(); 
    connectToDatabase(); 
  }
});

connectToDatabase();
module.exports = conexion;
