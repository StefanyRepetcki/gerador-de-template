# Web API

Este módulo contém os objetos do axios configurados para comunicação com APIs HTTP necessárias para a aplicação. O objetivo é diminuir a dependência do projeto pelo axios e deixar centralizada a responsabilidade de saber como se comunicar com o(s) back-end(s) necessários.

## BFF

A Plataforma utiliza o modelo de API BFF. Este módulo exporta a instância do axios configurada para se comunicar com o BFF e as demais instâncias que não têm uma justificativa para existir são consideradas dívida técnica. Siga as orientações abaixo para aproveitar os benefícios desse modelo.

### Endpoints não são reusáveis

- evite reaproveitar endpoints já existentes

_Por quê?_ O BFF é usado com o objetivo principal de melhorar a experiência do usuário. Com o reaproveitamento de endpoints existentes, a tendência é que esses endpoints acabem precisando sofrer alterações que podem resultar no tráfego de dados entre front e back, utilizando mais recursos do dispositivo do usuário como rede e bateria.

_Por quê?_ O reaproveitamento de endpoints dificulta o rastreamento de dependência entre front e back de forma que uma alteração em um endpoint pode acabar impactando funcionalidades de forma inesperada. Ao manter paridade entre telas e endpoints, é possível alterar endpoints sabendo exatamente qual parte da aplicação será impactada.

Ao fazer o plano de desnvolvimento, identifique quais informações são necessárias para o funcionamento daquela tela. Negocie com as outras pessoas do time para que toda a troca de informações entre essa funcionalidade e o back-end seja feita por endpoints criados especificamente para isso. Nem mesmo os DTOs devem ser reaproveitados entre funcionalidades diferentes.

### Todas as informações das quais uma tela precisa devem vir do BFF

- evite ler informações do LocalStorage

_Por quê?_ Aproveitar informações armazenadas no LocalStorage por outras funcionalidades dificulta o rastreamento de dependências entre funcionalidades e aumenta o acoplamento.

- evite compartilhar estado com Vuex se o objetivo for reduzir a comunicação entre front e back

_Por quê?_ O BFF é usado para melhorar a experiência do usuário, mas não a qualquer custo. O uso do Vuex para reduzir a comunicação entre front e back cria uma complexidade de gerenciamento de estado que pode dificultar a manutenção da aplicação, por fim, piorando a experiência do usuário. Considere o cenário em que o usuário navega da tela A para a B. A tela B depende de algumas informações que o front-end acabou de receber quando o usuário acessou a tela A, mas não necessariamente os clientes que acessam B terão acessado A na mesma sessão. No caso específico da navegação de A para B, pode parecer proveitoso armazenar informações recebidas por A na store para que B não precise chamar o BFF para obtê-las. A aparente vantagem e melhoria na experiência do usuário se torna um problema quando você prepara a tela B para o caso do usuário acessá-la sem ter passado por A. A complexidade está no fato de que B precisará ter um mecanismo para verificar se as informações estão ou não na store para decidir se será necessário ou não chamar um endpoint. A recomendação é que cada tela consuma seu próprio endpoint de inicialização que retorne todos (e apenas) os dados necessários.
