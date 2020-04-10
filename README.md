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
      ]
    };

### `tslint.json`
    {
      "extends": ["@emanprague/eslint-config/tslint"]
    }

### `.prettierrc.js`
    module.exports = require("@emanprague/eslint-config/prettier-config");

## TODO
Once SonarTS rules are moved from TSlint to ESlint, all references to TSlint can be removed. See https://github.com/SonarSource/SonarTS/issues/825
