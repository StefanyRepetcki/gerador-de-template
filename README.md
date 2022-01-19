# gerador-de-template

## Como usar

1. Instale a [Vue CLI](https://cli.vuejs.org/) para ter acesso ao comando `vue`:

```bash
yarn global add @vue/cli
```

2. Inicialize o seu projeto com o seguinte comando:

```bash
git clone
vue create --preset ./gerador-de-template meu-projeto-impostos
```

3. Escolha seu template

![Escolhas dentro da CLI](docs/choices.png)

4. Pronto 🎉

## Template "admin"

Para subir o servidor, rode o seguinte:

```bash
yarn mock
```

## Features

- [x] Vue
- [x] Vuex
- [x] Vuetify
- [x] Vue Router
- [x] Axios
- [x] Mock com json-server
- [x] Estrutura de pastas padronizada
- [x] Exemplo de CRUD

## Desenvolvimento

```
git checkout develop
vue create --preset ./gerador-de-template my-project

ou

vue create --preset ./gerador-de-template my-project --packageManager npm
```

## Leia mais

- [Custom Remote Presets](https://cli.vuejs.org/guide/plugins-and-presets.html#remote-presets)
