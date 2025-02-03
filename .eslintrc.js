module.exports = {
  settings: {
    react: {
      version: '999.999.999'
    }
  },
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'only-error'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/no-empty-function': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    //'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error', //error after code clear
      {
        usePrettierrc: true,
        endOfLine: 'auto'
      }
    ]
  }
};
