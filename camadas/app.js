let temp = new Date();
if (temp.getDay >= 6) {
  console.log("Dia de Preto");
} else {
  console.log("Ainda dia de Pretoo");
}

function test() {
  let horas = new Date().getHours();

  if (horas < 6) {
    console.log("Está de madrugada");
  } else if (horas < 12) {
    console.log("Ainda está de manhã");
  } else if (horas < 15) {
    console.log("Já está na hora do almoço");
  } else if (horas < 19) {
    console.log("Está de tarde");
  } else {
    console.log("Já é noite");
  }
}

test();
let imparPar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of imparPar) {
  if (numero % 2 === 0) {
    console.log(numero + " -É um numero é par");
  } else {
    console.log(numero + " -É número é impar");
  }
}
