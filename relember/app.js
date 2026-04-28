{
  //Exercicios e praticas no node/js
  function conta(a, b, c, d) {
    return a + ((b * c) % d);
  }
  console.log(conta(35, 251, 37, 2));
}

{
  //Essa função cria datas e horários no momento que é chamada
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
for (let i = 0; i <= 10; i++) {
  numero.push(i);
}
contador(...numero);

{
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
  console.log(`-O seu resultado é: ${resultaoDaOperacao}`);
  // vou refatorar esse codigo jaja, já sei como só uma boa pratica;
}

{
  // Refatorado!
  const funcoes = {
    soma: (a, b) => a + b,
    menos: (a, b) => a - b,
    vezes: (a, b) => a * b,
    divisao: (a, b) => a / b,
  };

  function operacoes(num1, num2, operacao) {
    return funcoes[operacao](num1, num2);
  }
  let resultado = operacoes(5, 10, "vezes");
  console.log(`-Seu novo resultado é: ${resultado}`);
}

{
  // Um teste deu uma função em pitoy que eu encontrei;

  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("*");
    }
    console.log(i);
  }
}

{
  /* quando eu quiser fazer uma tabela
no console, usar .table ex: console.table([])*/
  console.table([
    ["🍌", "🥭", true],
    ["❤️", "🍰", true],
  ]);
}

{
  /*
Eu quero fazer tipo um e se, porém com 
comparações  && ? :
ME DEU UMA CANSEIRA ESSA MERDA
DEVO DER LEVADO MAIS DE 40 MINUTOS NESTA 
TASK*/
  const hora = new Date();
  console.log(`Agora são ${hora.getHours()}`);
  console.log(
    hora.getHours() >= 0 && hora.getHours() <= 6
      ? "Agr é madrugada, vai dormir!"
      : hora.getHours() >= 6 && hora.getHours() <= 12
        ? "Hoje, é uma bela manha!"
        : hora.getHours() >= 12 && hora.getHours() <= 18
          ? "Já está até tardinho!"
          : " Puts, já é noite!",
  );
}
