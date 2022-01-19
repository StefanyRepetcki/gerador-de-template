module.exports = [
    {
        type: 'list',
        name: 'preset',
        message: 'Qual template você deseja usar?',
        choices: [
            {
                name: 'crud-vue-js',
                value: 'crud-vue-js'
            },
            {
                name: 'projeto',
                value: 'projeto'
            },
            {
                name: 'Básico',
                disabled: true,
                value: 'base'
            }
        ],
        default: 'base'
    },
]