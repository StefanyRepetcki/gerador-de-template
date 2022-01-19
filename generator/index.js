const fs = require('fs');

module.exports = (api, { preset = 'base', ambiente = 'dev-01' }) => {
    api.render(`./template/${preset}`);

    api.postProcessFiles(files => {
        const projectName = process.argv.pop();
        Object.keys(files).forEach(name => {
            if (typeof files[name] === 'string') {
                files[name] = files[name].replace(/NOME_DO_PROJETO/g, `${projectName}`);
                files[name] = files[name].replace(/AMBIENTE/g, `${ambiente}`);
            }

            if (/^src\/views[/$]/.test(name)) {
                delete files[name]
            }
            if (/^src\/router[/$]/.test(name)) {
                delete files[name]
            }
            if (/^src\/store[/$]/.test(name) && preset != 'projeto') {
                delete files[name]
            }

            const appTemplateDirectory = `${__dirname}/template/${preset}/src/App.vue`;

            if (!fs.existsSync(appTemplateDirectory)) return;

            const appTemplate = fs.readFileSync(appTemplateDirectory, 'utf8');

            files['src/App.vue'] = appTemplate;
        })
    });

    if (preset === 'projeto') {
        api.extendPackage({
            dependencies: {
                "@brazilian-utils/format-cnpj": "^0.1.9",
                "@brazilian-utils/format-cpf": "^0.1.8",
                "axios": "^0.21.1",
                "vue-currency-filter": "^5.2.0",
                "core-js": "^3.6.5",
                "lodash": "^4.17.21",
                "vue": "^2.6.11",
                "vue-class-component": "^7.2.3",
                "vue-property-decorator": "^9.1.2",
                "vue-router": "^3.2.0",
                "vuetify": "^2.4.0",
                "vuex": "^3.4.0",
                "vuex-class": "^0.3.2",
                "stackdriver-errors-js": "^0.11.0",
                "v-money": "^0.8.1"
            },
            devDependencies: {
                "@vue/cli-service": "^3.12.1",
                "@testing-library/vue": "^5.8.2",
                "@types/jest": "^24.0.19",
                "@typescript-eslint/eslint-plugin": "^4.18.0",
                "@typescript-eslint/parser": "^4.18.0",
                "@vue/cli-plugin-babel": "~4.5.0",
                "@vue/cli-plugin-eslint": "~4.5.0",
                "@vue/cli-plugin-router": "~4.5.0",
                "@vue/cli-plugin-typescript": "~4.5.0",
                "@vue/cli-plugin-unit-jest": "~4.5.0",
                "@vue/cli-plugin-vuex": "~4.5.0",
                "@vue/cli-service": "~4.5.0",
                "@vue/eslint-config-airbnb": "^5.0.2",
                "@vue/eslint-config-typescript": "^7.0.0",
                "@vue/test-utils": "^1.0.3",
                "eslint": "^6.7.2",
                "eslint-import-resolver-jest": "^3.0.0",
                "eslint-plugin-import": "^2.20.2",
                "eslint-plugin-vue": "^6.2.2",
                "msw": "^0.34.0",
                "sass": "~1.32.0",
                "sass-loader": "^7.1.0",
                "typescript": "~4.1.5",
                "vue-cli-plugin-vuetify": "~2.4.2",
                "vue-template-compiler": "^2.6.11",
                "vuetify-loader": "^1.7.0"
            },
            scripts: {
                "serve": "vue-cli-service serve",
                "build": "vue-cli-service build",
                "test:unit": "vue-cli-service test:unit --passWithNoTests",
                "test:watch": "vue-cli-service test:unit --watch",
                "lint": "vue-cli-service lint",
            }
        })
    }
}