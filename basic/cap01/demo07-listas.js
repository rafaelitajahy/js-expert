const minhaLista = [];
const minhaListaDeTarefas = [
  'mandar email',
  'colocar comida para o dog',
  'limpar o quarto',
  'fazer arroz',
  'comprar feijão',
];

console.log(minhaListaDeTarefas[0]);

// quantidade
console.log(minhaListaDeTarefas.length);

//add item
minhaListaDeTarefas.push('formatar computador');
console.log(minhaListaDeTarefas);

// remover último da lista
const ultimo = minhaListaDeTarefas.pop();
console.log(minhaListaDeTarefas, ultimo);

// remover o primeiro da lista
const primeiro = minhaListaDeTarefas.shift();
console.log(minhaListaDeTarefas, primeiro);

// remover com índice
minhaListaDeTarefas.splice(2, 1);
console.log(minhaListaDeTarefas);

const itens = [1, 'computador', 0.22];

console.log(typeof itens);
// verifica se é array
console.log(Array.isArray(itens));

// ordenar
const numeros = [3, 2, 1, 0];
console.log(numeros.sort());

//juntar  arrays
const novoArray = itens.concat([1, 2, 3]);
console.log(novoArray);

//juntar arrays em uma string
console.log(itens.join(','));

const index = itens.indexOf('computador'); // not found return -1
console.log(index);
