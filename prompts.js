module.exports = [
    {
        type: 'list',
        name: 'preset',
        message: 'Qual template você deseja usar?',
        choices: [
            {
                name: 'Crud (Recomendado)',
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