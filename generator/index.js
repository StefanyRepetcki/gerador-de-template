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

            const appTemplateDirectory = `${__dirname}/template/${preset}/src/App.vue`;

            if (!fs.existsSync(appTemplateDirectory)) return;

            const appTemplate = fs.readFileSync(appTemplateDirectory, 'utf8');

            files['src/App.vue'] = appTemplate;
        })
    });

    const getPackageJson = `${__dirname}/template/${preset}/package.json`;
    const readPackage = fs.readFileSync(getPackageJson, 'utf8');
    const finalPackageJson = JSON.parse(readPackage);

    api.extendPackage(finalPackageJson);
}
