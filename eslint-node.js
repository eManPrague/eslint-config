module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["jest"],
  extends: ["plugin:jest/recommended", "./eslint-default.js"],
  rules: {
    curly: ["error", "all"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": ["warn"],
  },
};
