module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["@typescript-eslint", "sonarjs", "unused-imports", "prefer-arrow"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  overrides: [
    {
      files: ["*.test.{ts,tsx}"],
      rules: {
        "sonarjs/no-duplicate-string": "off",
      },
    },
  ],
  rules: {
    curly: ["error", "all"],
    "no-console": "warn",
    "no-unneeded-ternary": "error",

    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        bracketSameLine: true,
        endOfLine: "auto",
        printWidth: 130,
        arrowParens: "avoid",
      },
    ],

    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["warn"],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/consistent-type-exports": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      { allowConstantLoopConditions: true },
    ],
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "warn",
      {
        ignoreConditionalTests: true,
      },
    ],
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "prefer-arrow-callback": "error",
    "arrow-body-style": ["error", "as-needed"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["parent", "sibling"],
          "index",
          "object",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "import/no-default-export": "error",
    "@typescript-eslint/array-type": "error",
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
};
