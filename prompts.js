module.exports = [
    {
        type: 'list',
        name: 'preset',
        message: 'Qual template você deseja usar?',
        choices: [
            {
                name: 'crud-vue-js',
                value: 'crud'
            },
            {
                name: 'projeto',
                value: 'crud'
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