let salarioDoAmigo = 1000;
let meuSalario = '2999';
let meuSalarioCorrigido = Number(meuSalario);

function soma(x, y) {
  return x + y;
}

console.log(soma(salarioDoAmigo + meuSalarioCorrigido));
console.log(typeof salarioDoAmigo, salarioDoAmigo);
console.log(typeof meuSalario, meuSalario);

console.log(isNaN(meuSalario));

let minhaString = 'Olá';
let minhaOutraString = 'mundo!';
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. AE!`;

console.log(minhaStringComVariaveis);
