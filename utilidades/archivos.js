const fs = require("fs");
const path = require("path");
const guardarSaludo = (nombre) => {
  const ruta = path.join("./textos", "saludo.txt");
  fs.writeFile(ruta, `Hola, ${nombre} Encantado de saludarte`, (err) => {
    if (err) console.log(err.message);
  });
};

module.exports = {
  guardarSaludo,
};
