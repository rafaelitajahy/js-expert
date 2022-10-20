function nomeDaFuncao(param) {
  // código
}

function queDiaEhoje() {
  const data = new Date();
  console.log(`Hoje é dia: ${data.getDate()}`);
}
queDiaEhoje();

function soma(valor1, valor2) {
  return valor1 + valor2;
}
const idade = 20;
const tamanho = 10;
const resultado = soma(idade, tamanho);
console.log('resultado', resultado);

////////////////

const funcionario1 = {
  nome: 'João',
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

const funcionario2 = {
  nome: 'Maria',
  desconto: 0.1,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

// const descontoFuncionario1 =
//   funcionario1.salarioBruto - funcionario1.desconto * funcionario1.salarioBruto;
// const descontoFuncionario2 =
//   funcionario2.salarioBruto - funcionario2.desconto * funcionario2.salarioBruto;

// console.log(`
//   Funcionario1: ${descontoFuncionario1}
//   Funcionario2: ${descontoFuncionario2}
// `);

function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - desconto * salarioBruto;
}

const descontoFuncionario1 = calcularDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
);
const descontoFuncionario2 = calcularDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
);

console.log(`
  Funcionario1: ${descontoFuncionario1}
  Funcionario2: ${descontoFuncionario2}
`);
