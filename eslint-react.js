module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["react", "vitest", "i18next"],
  extends: [
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:vitest/recommended",
    "plugin:i18next/recommended",
    "plugin:react-server-components/recommended",
    "./eslint-default.js",
  ],
  rules: {
    curly: ["error", "all"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": ["warn"],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-expression" },
      { blankLine: "always", prev: "multiline-expression", next: "*" },
      { blankLine: "always", prev: "directive", next: "*" },
    ],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/self-closing-comp": "error",
  },
  overrides: [
    {
      files: [
        "app/**/page.tsx",
        "app/**/layout.tsx",
        "app/**/loading.tsx",
        "app/**/error.tsx",
        "app/**/not-found.tsx",
        "app/**/global-error.tsx",
      ],
      rules: {
        "import/no-default-export": "off",
        "@typescript-eslint/array-type": "off",
        "prefer-arrow/prefer-arrow-functions": "off",
        "react/function-component-definition": "off",
      },
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        "import/no-default-export": "off",
        "i18next/no-literal-string": "off",
        "react-server-components/use-client": "off",
      },
    },
    {
      files: ["*.test.*"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
    {
      files: ["*.config.*"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
