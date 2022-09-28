module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:react-native/all",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: [".json"],
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
  },
  plugins: ["react-native", "@typescript-eslint", "prettier"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "builtin",
          "sibling",
          "parent",
          "internal",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
      },
    ],
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-cycle": "error",
    "import/no-unresolved": "off", // this leads to major lags and is assured by typescript anyway
    "no-nested-ternary": "error",
    "prettier/prettier": "error",
    "react-native/no-raw-text": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"]
  },
  // "settings": { // this is needed for import/no-unresolved
  //   "import/resolver": {
  //     "typescript": {
  //       "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  //     }
  //   }
  // }
};
