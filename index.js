const { program } = require("commander");
const process = require("process");

program.option("-n, --nombre <nombre>", "Especifica un nombre");

program.parse(process.argv);

const { nombre } = program.opts();

if (nombre) {
  console.log("Tu nombre es", nombre);
} else {
  console.log("No has puesto ningun nombre");
  process.exit(0);
}
