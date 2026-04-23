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
console.time("Test");
contador(...numero);
console.timeEnd("Test");
 