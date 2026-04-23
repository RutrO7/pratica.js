{
  //Exercicios e praticas no node/js
  function conta(a, b, c, d) {
    return a + ((b * c) % d);
  }
  console.log(conta(35, 251, 37, 2));
}

{
  const hora = new Date();
  console.log(
    `hoje é dia ${hora.getDate()}, do mês ${hora.getMonth()}, do ano ${hora.getFullYear()}`,
  );
}

function contador(...numbers) {
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(`O numero ${number}, é par`);
    } else {
      console.log(`O numero ${number}, é impar`);
    }
  }
}

const numero = [];
for (let i = 0; i <= 100; i++) {
  numero.push(i);
}
contador(...numero);
// Esse comando faz com que consiga fazer uma conta, basicamente uma calculadora;
// Uso a function(){} calcular para passar o parametro `Dos numeros que quero para;
// a conta, e qual operação quero efetuar`
function calcular(num1, num2, operacao) {
  return operacao(num1, num2);
}
function mais(num1, num2) {
  return num1 + num2;
}
function menos(num1, num2) {
  return num1 - num2;
}
function multi(num1, num2) {
  return num1 * num2;
}
function divisao(num1, num2) {
  return num1 / num2;
}
let resultaoDaOperacao = calcular(6, 5, divisao);
console.log(resultaoDaOperacao);
