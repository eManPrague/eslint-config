module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["react", "vitest"],
  extends: [
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:vitest/recommended",
    "./eslint-default.js",
  ],
  rules: {
    curly: ["error", "all"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": ["warn"],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
