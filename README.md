# eslint-config

This package contains shared rules for ESlint with TypeScript and Prettier.

Inspired by https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

## Usage

Install ESlint:

    yarn add eslint @emanprague/eslint-config -D

Update config files as follows:

### `.eslintrc.js`

    module.exports = {
      extends: [
        "@emanprague/eslint-config/eslint-default"
      ],
      settings: {
        react: {
          version: "latest",
        },
      },
      env: {
        browser: true,
        jest: true,
      },
    };

### `.prettierrc.js`

    module.exports = require("@emanprague/eslint-config/prettier-config");
