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
let nome = artur;
nome();
