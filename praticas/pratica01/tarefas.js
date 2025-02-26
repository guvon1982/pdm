//No arquivo tarefas.js, declare um array chamado tarefas para armazenar as tarefas. Cada tarefa deve ser um objeto com as propriedades id, nome e concluida.
const tarefas = [
  { id: 1739220546861, nome: "Estudar JavaScript", concluida: false },
];

//Crie uma função chamada listarTarefas() sem parâmetros para retornar a lista de tarefas.
function listarTarefas() {
  return tarefas;
}

//Crie uma função chamada adicionarTarefa() que deve receber como parâmetro o nome da tarefa.
function adicionarTarefa(nomeTarefa) {
  const novaTarefa = {
    id: Date.now().toString(),
    nome: nomeTarefa,
    concluida: false,
  };

  //Adicione o objeto da tarefa recém-criado ao final do array tarefas.
  tarefas.push(novaTarefa);
}
//Dentro da função adicionarTarefa(), crie um novo objeto de tarefa. Defina um novo id para a tarefa, que deve ser único (pode ser um timestamp). Atribua o valor de nomeTarefa à propriedade nome do objeto. Inicialize a propriedade concluida com o valor falso.

//Crie uma função chamada removerTarefa() que receberá um parâmetro idTarefa, representando o id da tarefa a ser removida.
function removerTarefa(idTarefa) {
  //Dentro da função removerTarefa(), utilize um loop ou a função findIndex() para localizar a posição da tarefa no array com o id correspondente. Se localizar a posição, utilize a função splice() para remover um elemento do array.
  const posicao = tarefas.findIndex((task) => task.id == idTarefa);
  if (posicao !== -1) {
    tarefas.splice(posicao, 1);
  }
}

//Crie outra função chamada modificarTarefa() que receberá os parâmetros idTarefa e um objeto com as propriedades que deseja atualizar.
function modificarTarefa(idTarefa, tarefaModificada) {
  //Dentro da função modificarTarefa(), Utilize um loop ou a função find() para encontrar a tarefa com o id correspondente. Se encontrar a tarefa, atualize suas propriedades da tarefa conforme o objeto fornecido.
  const tarefaLocalizada = tarefas.find((tarefa) => tarefa.id == idTarefa);
  if (tarefaLocalizada) {
    Object.assign(tarefaLocalizada, tarefaModificada);
  }
}

//Exporte as funções para serem acessadas por outros módulos da aplicação.
export { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa };
