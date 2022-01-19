# Core

Este módulo existe para guardar a infraestrutura da aplicação. Apesar de ter a aplicação separada em módulos, ainda assim é necessário ter algumas configurações centralizadas (exemplos: definição de rotas, definição da store).

O ideal é que não haja lógica de negócio neste módulo, exceto em casos em que seja mais simples para o design do projeto. Neste caso, a instalação do shell na aplicação está aqui, porque a separação criaria um módulo adicional que não tende a crescer.

Este módulo não deve ser usado para guardar artefatos usados por mais de um módulo e não é exatamente um módulo global. Ao adicionar código neste módulo, reflita se esse é um código de infra do projeto. Caso não seja, provavelmente você vai querer adicionar em outro módulo.

## Snackbar.vue

O Snackbar está importado no `App.vue` e pode ser chamado de qualquer lugar da aplicação com `this.$store.commit('toggleToast', { snackbar: true, text: 'Exemplo de texto', timeout: 2000 }`.

Parametros:
  - buttonCaption: String,        // caption do button quando o custom está true
  - buttonLabel: String,          // label do button quando custom está true
  - custom: Boolean,              // ativa o outro layout do snackbar (verificar no `ui-toolkit`)
  - icon: String,                 // aceita icons do material.
  - id: String,                   // somente um snackbar pode ser acionado por vez, pois eles estão com ID default == 'snackbar' no `App.vue`.
  - label: String,                // mensagem a ser mostrada no snackbar.
  - onActionButtonClick: Function // Função a ser executada.
  - persistent: Boolean           // snackbat ignora ou não o timeout, sendo fechado somente por ação do usuário.
  - snackbar: Boolean,                // recebe true para mostrar o snackbar e false para fechar.
  - timeout: Number,              // tempo em milisegundos que o snackbar leva para fechar automaticamente.
  - type: String,                 // mesmos types do `Alert` do `ui-toolkit` success, danger, warning, info.

  Se for necessário utilizar multiplos toasts em uma tela, passe um ID único para eles. O toast de Error no `GlobalErrorHandler.js`, terá seu próprio ID quando gerado e não afeta o snackbar default sendo chamado na tela.
