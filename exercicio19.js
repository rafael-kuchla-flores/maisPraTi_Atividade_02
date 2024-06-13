const prompt = require('prompt-sync')()


let horarios = [];

for (let i = 0; i < 5; i++) {
  let horario = prompt(`Digite o horário ${i + 1} (HH.MM.SS): `);

  while (!validarHorario(horario)) {
    horario = prompt(`Horário inválido. Digite novamente o horário ${i + 1} (HH.MM.SS): `);
  }

  horarios.push(horario);
}

console.log("Horários válidos:");
for (let horario of horarios) {
  console.log(horario);
}

function validarHorario(horario) {
  let partes = horario.split(".");
  if (partes.length!== 3) return false;

  let hora = parseInt(partes[0]);
  let minuto = parseInt(partes[1]);
  let segundo = parseInt(partes[2]);

  if (hora < 0 || hora > 23) return false;
  if (minuto < 0 || minuto > 59) return false;
  if (segundo < 0 || segundo > 59) return false;

  return true;
}