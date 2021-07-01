const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const guardarSaludo = (nombre) => {
  const ruta = path.join("./textos", "saludo.txt");
  fs.writeFile(ruta, `Hola, ${nombre} Encantado de saludarte`, (err) => {
    if (err) console.log(chalk.red.bold(err.message));
  });
};

module.exports = {
  guardarSaludo,
};
