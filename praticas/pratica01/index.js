// importe o pacote readline-sync.
import readline from "readline-sync";

//Importe todas as funções do arquivo tarefas.js
import {
  listarTarefas,
  adicionarTarefa,
  removerTarefa,
  modificarTarefa,
} from "./tarefas.js";

//Declare uma função exibirMenu() sem parâmetro.
function exibirMenu() {
  //Faça a função exibirMenu() imprimir as opções: 1 - Adicionar tarefas; 2 - Listar tarefas; 3 - Remover tarefa; 4 - Modificar tarefa; 5 - Sair.
  console.log("MENU PRINCIPAL");
  console.log("1 - Adicionar tarefas");
  console.log("2 - Listar tarefas");
  console.log("3 - Remover tarefa");
  console.log("4 - Modificar tarefa");
  console.log("5 - Sair");
}

//Declare a função escolherOpcao() que deve receber o parâmetro opcao.
function escolherOpcao(opcao) {
  //Faça a função escolherOpcao() testar o parâmetro opcao com as opções do menu.
  switch (opcao) {
    //Caso a opção seja 1, utilize a função readline.question() para ler o nome da tarefa. Em seguida, utilize a função adicionarTarefa() com o valor lido.
    case "1": {
      const nome = readline.question("Entre com o nome da tarefa: ");
      adicionarTarefa(nome);
      break;
    }

    //Caso a opção seja 2, utilize a função listarTarefas() para obter as tarefas cadastradas. Em seguida, utilize um loop ou a função forEach() para percorrer o array e imprimir as informações id, nome e concluida de cada tarefa.
    case "2": {
      const tarefas = listarTarefas();
      console.log("Minhas tarefas:");
      tarefas.forEach((tarefa) => {
        console.log(
          `ID: ${tarefa.id}, Nome: ${tarefa.nome}, Concluida: ${tarefa.concluida}`
        );
      });
      break;
    }

    //Caso a opção seja 3, utilize a função readline.question() para ler o id da tarefa. Em seguida, utilize a função removerTarefa() com o valor lido.
    case "3": {
      const id = readline.question("Entre com o id da tarefa: ");
      removerTarefa(id);
      break;
    }

    //Caso a opção seja 4, utilize a função readline.question() para ler as propriedades id, nome e concluida da tarefa. Em seguida, utilize a função modificarTarefa() com os valores lidos.
    case "4": {
      const id = readline.question("Entre com o id da tarefa: ");
      const nome = readline.question("Entre com o nome da tarefa: ");
      const concluida = readline.question("Entre com o status da tarefa: ");
      modificarTarefa(id, { nome, concluida });
      break;
    }

    //Caso a opção seja 5, utilize a função process.exit() para encerrar a execução
    case "5": {
      process.exit(0);
      break;
    }

    //Caso não seja nenhuma das opções anteriores, imprima a mensagem de que a opção escolhida é inválida.
    default:
      console.log("Opção inválida. Tente novamente!");
  }
}

//Declare a função main() e crie um laço infinito.
function main() {
  while (true) {
    // Dentro do laço, utilize a função exibirMenu() para imprimir as opções do menu.
    exibirMenu();

    //Dentro do laço, utilize a função readline.question() para ler uma opção do menu.
    const opcao = readline.question("Escolha uma opção: ");

    //Dentro do laço, utilize a função escolherOpcao() com o valor lido.
    escolherOpcao(opcao);
  }
}

//No arquivo index.js, utilize a função main() para iniciar o programa.
main();
