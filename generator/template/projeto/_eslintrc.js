module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      jest: {
        jestConfigFile: './jest.config.js',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    quotes: "off",
    'linebreak-style': 0,
    allowIndentationTabs: 0,
    'no-shadow': ['error', { allow: ['state'] }],
    'template-curly-spacing': 'off',
    'import/prefer-default-export': 'off',
    'vue/component-tags-order': 'off',
    'func-names': 'off',
    'class-methods-use-this': 'off',
    'object-curly-spacing': 'off',
    'no-tabs': 0,
    'no-param-reassign': 'off',
    indent: 'off',
    'arrow-parens': [2, "as-needed"],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
