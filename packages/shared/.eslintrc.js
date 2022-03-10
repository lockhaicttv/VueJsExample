module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  // parserOptions: {
  //   ecmaVersion: 2018,
  //   sourceType: "module",
  //   project: "./packages/shared/tsconfig.lint.json",
  // },
  parserOptions: {
    parser: "@typescript-eslint/parser",
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
    "no-empty-function": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-useless-constructor": "error",
  },
};
