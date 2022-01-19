# Monitoring

Módulo dedicado a monitoramento de erros client-side.

## Como usar

Não é necessária nenhuma implementação adicional. O monitoramento captura todos erros não tratados e registra. No entanto, alguns cuidados são importantes para garantir que os erros sejam registrados.

- ao desenvolver, verifique o console e corrija as causas de TODOS os erros impressos
- ao tratar um erro com try-catch, verifique se o tratamento elimina a necessidade de sermos alertados. Por exemplo, se o erro for um erro negocial, uma mensagem informando o usuário sobre o erro já é o suficiente. Se o erro em questão for um erro inesperado por mau funcionamento do back-end, provavelmente será mais eficiente monitorar o funcionamento do back-end com o StackDriver. Ao adicionar try-catch em um bloco de código, esteja ciente que qualquer erro ocorrido no `try` NÃO SERÁ REGISTRADO pelo monitoramento e não poderá gerar um alerta, a menos que o catch lance o erro novamente para um escopo superior. Em resumo, NÃO ADICIONE try-catch em trechos de código para os quais você gostaria de receber um alerta no caso de mau funcionamento.

## Como funciona

O [stackdriver-error-js](https://github.com/GoogleCloudPlatform/stackdriver-errors-js) captura todas as exeções e envia para o StackDriver no projeto.

## Estrutura interna do módulo

Para evitar lock-in, o único ponto da aplicação que depende diretamente do stackdriver-error-js deve ser este módulo.

monitoring.service.js é a abstração que será usada pelos módulos funcionais para monitoramento. Caso seja tomada a decisão de troca da forma de fazer monitoramento, só precisaremos alterar esse arquivo.

stackdriver-error-js.config.js tem o código específico para inicialização do stackdriver-error-js. No caso do uso de outras ferramentas, o ideal é criar um arquivo de config específico.
