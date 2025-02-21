/*
//VARIAVEIS

//variavel local = let
let variavel_local = 10;

//variavel global (NÃO USAR VAR)

const constante = [];
const objeto = {};
const msg = "Texto"; //string
let status = false;  //boleana

//FUNCOES
function soma(a, b){
    return a + b;
}
const resultado = soma(1, 2);

const multiplica = (a, b) => a * b;
resultado = multiplica (1, 2);
/*
function multiplica (a, b){
    return a * b
}
*/

/*
async function tempo(duracao) {
    return new Promise();
}
*/

async function tempo(duracao) {
  await new Promise((r) => {
    setInterval(r, duracao);
  });
  console.log("passou o tempo!");
}

tempo(3000);

//OBJETOS

const pessoa = { nome: "Jose", email: "jose@iesb.edu.br", fone: "8888-8888" };
console.log(pessoa.nome);
pessoa.nome = "Jose Reginaldo";
console.log(pessoa.nome);
const { nome } = pessoa;
console.log(nome);
const pessoa_fisica = { cpf: 111, ...pessoa };

const lista = [];
lista.push("uva");
const achou = lista.find((item) => item === "uva"); swd