export default [{
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
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
  plugins: ['@typescript-eslint', 'only-error'],
  ignores: ["node_modules/**/*", "dist/**/*"],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    '@typescript-eslint/no-empty-function': 'error',
    'prettier/prettier': [
      'error', //error after code clear
      {
        usePrettierrc: true,
        endOfLine: 'auto'
      }
    ]
  }
}] ;
