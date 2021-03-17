module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["@typescript-eslint", "sonarjs"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:sonarjs/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    curly: ["error", "all"],
    "no-redeclare": "off", // warns on typescript function overrides
    //"@typescript-eslint/no-redeclare": ["error"], // this should be enabled, but causes 'Definition for rule '@typescript-eslint/no-redeclare' was not found'

    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": ["error", "never"],

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      1,
      { args: "none", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/no-use-before-define": "off", // disabled because it can report incorrect errors https://stackoverflow.com/a/64024916/19712
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
