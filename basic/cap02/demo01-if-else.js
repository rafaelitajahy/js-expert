let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]
if(isNaN(saldo)) {
  console.log('valor inválido')
  return;
}

/////
let tipoCliente = 'premium'
if(saldo <= 9){
  tipoCliente = 'basic'
}
else if(saldo >= 10 && saldo < 20) {
  tipoCliente = 'gold'
}
else {
  tipoCliente = null
}

if(!tipoCliente){
  tipoCliente = 'indefinido'
}
console.log('tipoDoCliente', tipoCliente)

//////

const operadorOu = 1 > 2 || 2 !== 2
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1)

const idade = 18 
const resultado = idade >= 18 ? 'pode dirigir' : 'não pode dirigir!!'
console.log('resultado', resultado) 

