module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["vue"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
    "prettier/@typescript-eslint",
    "prettier/vue",
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "vue/no-unused-vars": "error",
    "no-console": "error",
    "no-debugger": "error",
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "consistent-return": "off",
  },
};
