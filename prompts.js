module.exports = [
    {
        type: 'list',
        name: 'preset',
        message: 'Qual template você deseja usar?',
        choices: [
            {
                name: 'base',
                value: 'base'
            },
            {
                name: 'blog',
                value: 'blog'
            },
            {
                name: 'dashboard',
                value: 'dashboard'
            },
            {
                name: 'freelance',
                value: 'freelance'
            },
            {
                name: 'parallax',
                value: 'parallax'
            },
            {
                name: 'vite',
                value: 'vite'
            },
            {
                name: 'zero',
                value: 'zero'
            },
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