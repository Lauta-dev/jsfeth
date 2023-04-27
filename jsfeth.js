import color from "colors";
import { cpus, machine, platform, release, userInfo, hostname } from "node:os";

const feth = () => {
  const proce = cpus()[0].model;
  const arquitetura = machine();
  const linux = platform();
  const kernel = release();
  const shell = userInfo().shell;
  const usuario = userInfo().username;
  const hostName = hostname();

  const compu = [`${linux} - ${arquitetura}`, usuario, hostName, kernel, shell, proce];
  return compu;
};
const msj = ["Sistema", "Usuario", "Hostname", "Kernel", "Shell", "CPU"];

for (let i = 0; i < feth().length; i++) {
  if (i == 0) console.log(`${feth()[1]}@${feth()[2]}`.blue);
  console.log(`${msj[i].green}: ${feth()[i]}`);
}
