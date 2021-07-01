const { program } = require("commander");
const process = require("process");
const { guardarSaludo } = require("./utilidades/archivos");

program.option("-n, --nombre <nombre>", "Especifica un nombre");

program.parse(process.argv);

const { nombre } = program.opts();

if (nombre) {
  guardarSaludo(nombre);
} else {
  console.log("No has puesto ningun nombre");
  process.exit(0);
}
