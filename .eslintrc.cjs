module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-no-inline-styles"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-empty-function": "error",
    "prettier/prettier": [
      "error",
      {
        usePrettierrc: true,
        endOfLine: "auto",
      },
    ],
    "no-inline-styles/no-inline-styles": 1,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Apply only to TypeScript files
      excludedFiles: "*.d.ts",
    },
  ],
};
