const podeDirigir = true;
if (podeDirigir) {
  console.log('Ela pode dirigir');
}

const saldoEmConta = 0;
if (!saldoEmConta) {
  console.log('não tem saldo!');
}

const boolComString = 'e ai!';
console.log('boolComString', !boolComString);
console.log('boolComString', !!boolComString); //testa a variável se é true ou false

console.log('negação + teste', !!!boolComString);
