function minhaFuncao1(param) {
  return 'eee';
}

const minhaFuncao2 = function (param) {
  return 'aaaa';
};

const minhaFuncao3 = (param) => {
  return 'iiiiii';
};

const minhaFuncao4 = (param) => 'iiiii';

const obj1 = {
  minhaFuncao: (param) => 'iiiii',
};

obj1.minhaFuncao('');
