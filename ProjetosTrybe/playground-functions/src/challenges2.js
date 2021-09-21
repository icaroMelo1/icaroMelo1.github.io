// Desafio 10
// https://ricardo-reis.medium.com/operadores-l%C3%B3gicos-logical-operators-b0687819d1a5
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function techList(array3, name) {
  if(!array3.length) return 'Vazio!';
  let info = [];
  for (let i of array3) {
    info.push ( {
     tech: i,
     name: name, 
    });
  }
  info.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
  return info;
}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Icaro"));

// Desafio 11
function generatePhoneNumber(array4) {
  let newarray = array4;
  if(array4.length = 11){
    array4.splice(0, 0, ['(']);
    array4.splice(3, 0, [')']);
    array4.splice(4, 0, [' ']);
    array4.splice(10, 0, ['-']);
  } 
  
  else {
    newarray = "Array com tamanho incorreto.";
  }
  return newarray;
}

console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
