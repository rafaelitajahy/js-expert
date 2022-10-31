const readLine = require('readline');
const terminal = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

const textoMenu = `
  Olá, seja bem-vindo ao sistema de media
  Digite 1 para acessar o menu inicial
  Digite 2 para acessar o menu de Herois
  Digite 3 para acessar o menu de Guerreiras
  Digite 0 para sair
`
const pressionou = 'Pression';

console.log('textoMenu', textoMenu);
const opcao = 1
switch(opcao){
  case 1:
    console.log(`${pressionou}: ${opcao}`)
    break;
  case 2:
    console.log(`${pressionou} - ${opcao}`)
    break;
  case 3:
    console.log(`${pressionou} - ${opcao}`)
    break;
  default:
    console.log('Opçào inválida!')
}

const questoes = {
  menuInicial: {
    texto: textoMenu,
    fn: menuInicial
  },
  opcao1: {
    texto: 'submenu! Pressione enter para selecionar mais opcoes...',
    fn: opcao1
  }
}
function opcao1(msg){
  console.log('Não há mais opçoes...')
  terminal.close()
}
function menuInicial(msg) {
  const opcao = Number(msg)
  if(isNaN(opcao)){
    throw new Error('Não é um numero', msg)
  }
  switch(opcao) {
    case 0:
      console.log('Saindo...')
      terminal.close()
      break;
    case 1:
      console.log('menu inicial')
      terminal.question(
        questoes.opcao1.texto,
        questoes.opcao1.fn
      )
      break;
    default:
      console.log('Opcão inválida')
      terminal.close()
      break;

  }
  console.log('Acionando menu inicial!', msg)
}

terminal.question(
  questoes.menuInicial.texto,
  questoes.menuInicial.fn
)
