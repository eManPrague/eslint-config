# eslint-config

This package contains shared rules for ESlint with TypeScript and Prettier.

Inspired by https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

## Versions

eslint-config v4 refactor rules and divide config for node and react

eslint-config v3 supports ESlint 8.

eslint-config v2 requires ESlint 7.

Use eslint-config v1 for ESlint 6 + TSlint.

## Usage

Install ESlint:

    yarn add eslint prettier @emanprague/eslint-config -D

Update config files as follows:

(use correct config, eslint-node for backend and eslint-react for frontend)

### `.eslintrc.js`

    module.exports = {
      extends: [
        "@emanprague/eslint-config/eslint-[node|react]"
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
      env: {
        browser: true,
      },
    }

---

And you should be good to go with:

```console
eslint \"./src/**/*.{ts,tsx}\" --cache
```

# Contribution

How to release:

1.  manually set version in package.json
1.  push
1.  create a new release in GH
