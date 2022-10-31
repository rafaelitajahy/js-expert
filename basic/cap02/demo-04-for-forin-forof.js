const textoPar = 'par'
const testoImpar = 'impar'
for(let index = 0; index <= 10; index++) {
  const decisao = index % 2 === 0 ? textoPar : testoImpar
  console.log(`O número ${index} é ${decisao}`)
}

////////////////////////////////////
const minhaListaDeTarefas = [
  {
    id: parseInt(Math.random() * 100),
    nome: 'Ze',
    superpoder: 'Super força'
  },
  {
    id: parseInt(Math.random() * 100),
    nome: 'Maria',
    superpoder: 'Super força'
  },
]

for(let index = 0; index < minhaListaDeTarefas.length; index ++) {
  const item = minhaListaDeTarefas[index]
  console.log(`
    id: ${item.id}
    nome: ${item.nome}
  `)
}

////////////////////////////////

for(const index in minhaListaDeTarefas) {
  const item = minhaListaDeTarefas[index]
  console.log(`Nome: ${item.nome}`)
}

//////////////////////////////

for(const item of minhaListaDeTarefas){
  console.log('Nome: ', item.nome)
}
