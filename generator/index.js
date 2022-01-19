const fs = require('fs');

module.exports = (api, {
    preset = 'base',
    ambiente = 'dev-01'
}) => {
    api.render(`./template/${preset}`);

    api.postProcessFiles(files => {
        const projectName = process.argv.pop();
        Object.keys(files).forEach(name => {
            if (typeof files[name] === 'string') {
                files[name] = files[name].replace(/NOME_DO_PROJETO/g, `${projectName}`);
                files[name] = files[name].replace(/AMBIENTE/g, `${ambiente}`);
            }

            // if (/^src\/views[/$]/.test(name)) {
            //     delete files[name]
            // }
            // if (/^src\/router[/$]/.test(name)) {
            //     delete files[name]
            // }
            // if (/^src\/store[/$]/.test(name) && preset != 'projeto') {
            //     delete files[name]
            // }

            const appTemplateDirectory = `${__dirname}/template/${preset}/src/App.vue`;

            if (!fs.existsSync(appTemplateDirectory)) return;

            const appTemplate = fs.readFileSync(appTemplateDirectory, 'utf8');

            files['src/App.vue'] = appTemplate;
        })
    });

    switch (preset) {
        case 'blog':
            api.extendPackage({
                dependencies: {
                    "vue": "^2.6.11",
                    "vue-router": "^3.1.6",
                    "vuetify": "^2.2.23",
                    "vuex": "^3.2.0"
                },
                devDependencies: {
                    "@vue/cli-plugin-babel": "^4.3.1",
                    "@vue/cli-service": "^4.3.1",
                    "@vue/eslint-config-standard": "^5.1.2",
                    "@vue/test-utils": "^1.0.0-beta.33",
                    "babel-core": "7.0.0-bridge.0",
                    "babel-eslint": "^10.1.0",
                    "babel-jest": "^25.4.0",
                    "eslint": "^6.8.0",
                    "eslint-config-vuetify": "^0.6.0",
                    "eslint-plugin-vue": "^6.2.2",
                    "sass": "^1.26.3",
                    "sass-loader": "^8.0.2",
                    "vue-cli-plugin-vuetify": "^0.4.6",
                    "vue-template-compiler": "^2.6.11",
                    "vuetify-loader": "^1.4.3"
                },
                scripts: {
                    "deploy": "yarn build && now && now alias",
                    "serve": "vue-cli-service serve",
                    "build": "vue-cli-service build",
                    "lint": "vue-cli-service lint"
                }
            });
            break;
        case 'crud-vue-js':
            api.extendPackage({
                dependencies: {
                    "bootstrap": "^4.5.0",
                    "firebase": "^4.12.1",
                    "font-awesome": "4.6.3",
                    "jquery": "^3.5.1",
                    "popper.js": "^1.14.6",
                    "vue": "^2.5.2",
                    "vue-router": "^3.0.1"
                },
                devDependencies: {
                    "autoprefixer": "^7.1.2",
                    "babel-core": "^6.22.1",
                    "babel-helper-vue-jsx-merge-props": "^2.0.3",
                    "babel-loader": "^7.1.1",
                    "babel-plugin-syntax-jsx": "^6.18.0",
                    "babel-plugin-transform-runtime": "^6.22.0",
                    "babel-plugin-transform-vue-jsx": "^3.5.0",
                    "babel-preset-env": "^1.3.2",
                    "babel-preset-stage-2": "^6.22.0",
                    "chalk": "^2.0.1",
                    "copy-webpack-plugin": "^4.0.1",
                    "css-loader": "^0.28.0",
                    "extract-text-webpack-plugin": "^3.0.0",
                    "file-loader": "^1.1.4",
                    "friendly-errors-webpack-plugin": "^1.6.1",
                    "html-webpack-plugin": "^2.30.1",
                    "node-notifier": "^5.1.2",
                    "optimize-css-assets-webpack-plugin": "^3.2.0",
                    "ora": "^1.2.0",
                    "portfinder": "^1.0.13",
                    "postcss-import": "^11.0.0",
                    "postcss-loader": "^2.0.8",
                    "postcss-url": "^7.2.1",
                    "rimraf": "^2.6.0",
                    "semver": "^5.3.0",
                    "shelljs": "^0.7.6",
                    "uglifyjs-webpack-plugin": "^1.1.1",
                    "url-loader": "^0.5.8",
                    "vue-loader": "^13.3.0",
                    "vue-style-loader": "^3.0.1",
                    "vue-template-compiler": "^2.5.2",
                    "webpack": "^3.6.0",
                    "webpack-bundle-analyzer": "^3.3.2",
                    "webpack-dev-server": "^2.11.5",
                    "webpack-merge": "^4.1.0"
                },
                scripts: {
                    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
                    "start": "npm run dev",
                    "build": "node build/build.js"
                }
            });
            break;
        case 'dashboard':
            api.extendPackage({
                dependencies: {
                    "vue": "^2.6.11",
                    "vue-meta": "^2.3.3",
                    "vue-router": "^3.1.6",
                    "vuetify": "^2.3.13",
                    "vuex": "^3.4.0",
                    "vuex-pathify": "^1.4.1",
                    "vuex-router-sync": "^5.0.0"
                },
                devDependencies: {
                    "@babel/core": "^7.9.0",
                    "@vue/cli-plugin-babel": "^4.3.1",
                    "@vue/cli-plugin-eslint": "^4.3.1",
                    "@vue/cli-plugin-router": "~4.3.1",
                    "@vue/cli-plugin-vuex": "~4.4.0",
                    "@vue/cli-service": "^4.3.1",
                    "@vue/eslint-config-standard": "^5.1.2",
                    "@vuetify/vue-cli-plugin-preset-base": "~0.3.2",
                    "archiver": "^4.0.1",
                    "babel-core": "7.0.0-bridge.0",
                    "babel-eslint": "^10.1.0",
                    "dotenv": "^8.2.0",
                    "eslint": "^6.8.0",
                    "eslint-config-standard": "^14.1.1",
                    "eslint-config-vuetify": "^0.6.0",
                    "eslint-plugin-import": "^2.20.2",
                    "eslint-plugin-node": "^11.1.0",
                    "eslint-plugin-promise": "^4.2.1",
                    "eslint-plugin-standard": "^4.0.1",
                    "eslint-plugin-vue": "^6.2.2",
                    "eslint-plugin-vuetify": "^1.0.0-beta.8",
                    "lodash": "^4.17.15",
                    "open": "^7.0.3",
                    "sass": "^1.26.5",
                    "sass-loader": "^8.0.2",
                    "shelljs": "^0.8.4",
                    "vue-chartist": "^2.3.1",
                    "vue-cli-plugin-vuetify": "^2.0.5",
                    "vue-template-compiler": "^2.6.11",
                    "vuetify-loader": "^1.4.3",
                    "webfontloader": "^1.6.28",
                    "webpack": "^4.43.0"
                },
                scripts: {
                    "serve": "vue-cli-service serve",
                    "dev": "yarn serve",
                    "build": "vue-cli-service build",
                    "lint": "vue-cli-service lint",
                    "postversion": "node scripts/postversion.js"
                }
            });
            break;
        case 'freelance':
            api.extendPackage({
                dependencies: {
                    "vue": "^2.6.11",
                    "vuetify": "^2.2.25"
                },
                devDependencies: {
                    "@babel/core": "^7.9.0",
                    "@vue/cli-plugin-babel": "^4.3.1",
                    "@vue/cli-plugin-eslint": "^4.3.1",
                    "@vue/cli-service": "^4.3.1",
                    "@vue/eslint-config-standard": "^5.1.2",
                    "@vue/test-utils": "^1.0.0-beta.33",
                    "archiver": "^4.0.1",
                    "babel-core": "7.0.0-bridge.0",
                    "babel-eslint": "^10.1.0",
                    "babel-jest": "^25.4.0",
                    "dotenv": "^8.2.0",
                    "eslint": "^6.8.0",
                    "eslint-config-standard": "^14.1.1",
                    "eslint-config-vuetify": "^0.6.0",
                    "eslint-plugin-import": "^2.20.2",
                    "eslint-plugin-node": "^11.1.0",
                    "eslint-plugin-promise": "^4.2.1",
                    "eslint-plugin-standard": "^4.0.1",
                    "eslint-plugin-vue": "^6.2.2",
                    "open": "^7.0.3",
                    "sass": "^1.26.5",
                    "sass-loader": "^8.0.2",
                    "shelljs": "^0.8.4",
                    "vue-cli-plugin-vuetify": "^2.0.5",
                    "vue-template-compiler": "^2.6.11",
                    "vuetify-loader": "^1.4.3",
                    "webpack": "^4.43.0"
                },
                scripts: {
                    "serve": "vue-cli-service serve",
                    "build": "vue-cli-service build",
                    "lint": "vue-cli-service lint"
                }
            });
            break;
        case 'vite':
            api.extendPackage({
                dependencies: {
                    "core-js": "^3.6.5",
                    "roboto-fontface": "*",
                    "vue": "^3.2.2",
                    "vuetify": "^2.3.13"
                },
                devDependencies: {
                    "@vitejs/plugin-vue": "^1.1.5",
                    "@vue/cli-plugin-babel": "~4.5.0",
                    "@vue/cli-plugin-eslint": "~4.5.0",
                    "@vue/cli-service": "~4.5.0",
                    "@vue/compiler-sfc": "^3.1.2",
                    "@vuetify/vite-plugin": "^1.0.0-alpha.3",
                    "babel-eslint": "^10.1.0",
                    "eslint": "^6.7.2",
                    "eslint-plugin-vue": "^7.0.0",
                    "sass": "^1.38.2",
                    "sass-loader": "^10.0.0",
                    "vite": "^2.5.7",
                    "vue-cli-plugin-vuetify": "~2.4.0",
                    "vuetify-loader": "^2.0.0-alpha.8",
                    "webfontloader": "^1.6.28",
                    "webpack": "^5"
                },
                scripts: {
                    "serve": "vite preview",
                    "build": "vite build",
                    "lint": "vue-cli-service lint",
                    "dev": "vite"
                },
            });
            break;
        case 'projeto':
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
            });
            break;
        case 'zero':
            api.extendPackage({
                dependencies: {
                    "vue": "^2.6.14",
                    "vue-meta": "^2.4.0",
                    "vue-router": "^3.5.2",
                    "vuetify": "^2.5.8"
                },
                devDependencies: {
                    "@babel/core": "^7.15.4",
                    "@vue/cli-plugin-babel": "^4.5.13",
                    "@vue/cli-plugin-eslint": "^4.5.13",
                    "@vue/cli-plugin-router": "~4.5.13",
                    "@vue/cli-service": "^4.5.13",
                    "@vue/eslint-config-standard": "^6.1.0",
                    "@vuetify/vue-cli-plugin-preset-base": "~0.3.2",
                    "archiver": "^5.3.0",
                    "babel-core": "7.0.0-bridge.0",
                    "babel-eslint": "^10.1.0",
                    "dotenv": "^8.2.0",
                    "eslint": "^6.8.0",
                    "eslint-config-standard": "^16.0.2",
                    "eslint-config-vuetify": "^0.6.1",
                    "eslint-plugin-import": "^2.22.1",
                    "eslint-plugin-node": "^11.1.0",
                    "eslint-plugin-promise": "^4.3.1",
                    "eslint-plugin-standard": "^5.0.0",
                    "eslint-plugin-vue": "^7.9.0",
                    "eslint-plugin-vuetify": "^1.0.0-beta.7",
                    "lodash": "^4.17.21",
                    "open": "^7.0.3",
                    "sass": "~1.32.0",
                    "sass-loader": "^10.0.0",
                    "shelljs": "^0.8.4",
                    "vue-cli-plugin-vuetify": "~2.4.2",
                    "vue-template-compiler": "^2.6.14",
                    "vuetify-loader": "^1.7.3",
                    "webfontloader": "^1.6.28",
                    "webpack" : "5.61.0"
                },
                scripts: {
                    "serve": "vue-cli-service serve",
                    "dev": "yarn serve",
                    "build": "vue-cli-service build",
                    "lint": "vue-cli-service lint",
                    "postversion": "node scripts/postversion.js"
                }
            });
            break;
    }
}
