# eslint-config

This package contains shared rules for ESlint with TypeScript and Prettier.

Inspired by https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

## Versions

eslint-config v3 supports ESlint 8.

eslint-config v2 requires ESlint 7.

Use eslint-config v1 for ESlint 6 + TSlint.

## Usage

Install ESlint:

    yarn add eslint prettier @emanprague/eslint-config -D

Update config files as follows:

### `.eslintrc.js`

    module.exports = {
      extends: [
        "@emanprague/eslint-config/eslint-default"
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
      env: {
        browser: true,
      },
    };

### `.prettierrc.js`

    module.exports = require("@emanprague/eslint-config/prettier-config");

Note that instead of creating the `.prettierrc.js` file, you can just add the following row to your `package.json` file.

    "prettier": "@emanprague/eslint-config/prettier-config",

---

And you should be good to go with:

```console
eslint \"./src/**/*.{ts,tsx}\" --cache
```

# Contribution

How to release:
 1. manually set version in package.json
 1. push
 1. create a new release in GH
