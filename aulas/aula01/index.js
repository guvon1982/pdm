// variavies
let variavel_local = 10; // number
const constante = []; // array
const objeto = {}; // objeto
const msg = "Texto"; // string
let status = false; // bool

console.log(1 == '1');
console.log(1 === '1');

// funcoes
function soma(a, b) {
  return a + b;
}
let resultado = soma(1, 2);

const multiplica = (a, b) => a * b;
resultado = multiplica(1, 2);
/*
function multiplica(a, b) {
  return a * b;
}
*/

async function tempo(duracao) {
  await new Promise((r) => {
    setInterval(r, duracao);
  });
  console.log("passou o tempo!");
}

tempo(3000);

// objetos

const pessoa = { nome: "Jose", email: "jose@iesb.br", fone: "8888-8888" };
console.log(pessoa.nome);
pessoa.nome = "Jose Reginaldo";
console.log(pessoa.nome);
const { nome } = pessoa;
console.log(nome);
const pessoa_fisica = {cpf: 111, ...pessoa};

const lista = [];
lista.push("uva");
const achou = lista.find((item) => item === "uva");
/* find() equivale a 
for(int i=0; i<lista.length; i++) {
    if(lista[i] === "uva") {

    }
}*/

const texto = "Ola";
texto.concat(" Mundo");
texto.toUpperCase();

// modulos
export { soma, multiplica}