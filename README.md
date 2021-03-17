# eslint-config

This package contains shared rules for ESlint with TypeScript and Prettier.

Inspired by https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

## Versions

eslint-config v2 requires ESlint 7.

Use eslint-config v1 for ESlint 6 + TSlint.

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

And you should be good to go with:

```console
eslint \"./src/**/*.{ts,tsx}\" --cache
```
