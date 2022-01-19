# Errors

Módulo com utilitários para tratamentos de erros de back-end tanto globais, quanto específicos.

## Tipos de erro

O tratamento de erros varia de acordo com o tipo, que pode ser negocial ou inesperado.

## Erros inesperados

São erros que ocorrem quando algo não funcionou como deveria. Alguns exemplos são indisponibilidade de serviços externos e bugs no nosso código de back-end.

O tratamento de erros desse tipo é feito de forma genérica. O GlobalErrorHandler adiciona um interceptor no client HTTP e trata os erros de código 560, exibindo uma mensagem, com um código. Esse código é impresso no log. Caso o cliente peça ajuda e informe o código, fica mais fácil encontrar a causa, acessando o ponto exato do log relacionado ao erro.

## Erros negociais

São erros previstos, que normalmente são resultado de validações que não podem ser feitas no front. A forma de tratamento é local, porque isso depende de que aquele endpoint esteja implementado no padrão correto.

### Como tratar

O primeiro passo é combinar o uso do padrão junto com quem for desenvolver o back-end.

Um endpoint padronizado retornará os erros da forma que a infra de tratamento de erros espera. O objeto de erro não traz mensagens para serem exibidas para o usuário. Ao contrário disso, o objeto vem com identificadores. Isso evita que o front acabe exibindo uma mensagem com detalhes técnicos que não fariam sentido para o usuário.

Crie um objeto para servir como map, com cada identificador de erro possível estando associado a uma mensagem amigável ao cliente.

Exemplo:

```js
const errorMap = {
  'dashboard/stories-nao-ativados': 'Não foi possível ativar os stories. Verifique as configurações do seu navegador',
};
```

A requisição deve ser feita como sempre é. O componente chama um método de um service, que faz a requisição e devolve o resultado. Para simplificar o tratamento, siga o passo a passo:

- adicione um try-catch no método do componente que faz a chamada ao service
- não adicione try-catch no service -> isso vai fazer com que o erro seja passado para o componente, que vai fazer o tratamento
- importe o ErrorHandlingComposite e faça destructuring do atributo methods para o methods do seu componente -> isso evita a replicação de código entre componentes
- no catch, chame `this.handleError(error.response, MinhaFeatureService.errorMap);` -> handleError é o método unificado para tratamento de erros negociais. Ele recebe a resposta da requisição e o errorMap, lê os identificadores dos erros, encontra a mensagem correspondente e exibe um Toast

Exemplo: /src/errors/screens/ErrorExamples.vue
