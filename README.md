# Projeto APP para Cadastro de Tarefas

## Uso do React Native

O projeto tem como objetivo cadastrar, editar, deletar e listar tarefas. Além disso, existe a opção de marcar tarefas desejadas como concluídas.
O APP tem apenas duas views, uma para a listagem e a outra para o formulário. Para navegar por essas telas, utilizei a forma de navegação "stack", por meio de uma função chamada "createStackNavigator()".
No "header" da lista há um botão com o ícone "add", sendo um sinal de "+", ao pressionar esse botão o usuário navega para a view de formulário.
No formulário há dois "inputs", um para a matéria da tarefa e outro para os detalhes da tarefa(exemplifiquei no arquivo "tarefas.js" como forma de tarefas escolares), ambos são validados para não permitir cadastro de campos vazios.
As demais funções(editar, marcar como concluída, deletar) podem ser feitas acessando a lista, lá existe um botão com ícone de lixeira, um checkbox para marcar e também é possível clicar no corpo de uma tarefa para editá-la.

## Context API's e useReducer()

Como parte mais avançada do projeto, utilizei funções de createContext() e useContext() para criar um TarefasProvider e compartilhar o "state" e uma função "dispatch" para toda a aplicação.
As funções criadas para utilizar o "dispatch" são createTarefa(), updateTarefa() e deleteTarefa().
Essas funções foram criadas com o useReducer() a fim de "evoluir" o "state" atual.
