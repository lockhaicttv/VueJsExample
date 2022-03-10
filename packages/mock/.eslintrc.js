module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.lint.json",
  },
  settings: {
    node: {
      tryExtensions: [".ts", ".d.ts", ".js", ".json", ".node"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        version: ">=10.0.0",
        ignores: ["modules"],
      },
    ],

    "no-empty-function": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        prefixWithI: "always",
      },
    ],
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-useless-constructor": "error",
  },
};
module.exports = {
  trailingComma: "all",
  printWidth: 120,
  tabWidth: 2,
  singleQuote: false,
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json",
        tabWidth: 2,
      },
    },
  ],
};
