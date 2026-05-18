# @yamada-ui/eslint-plugin

The official ESLint plugin for Yamada UI projects.

## Installation

```sh
pnpm add -D @yamada-ui/eslint-plugin
# or
yarn add -D @yamada-ui/eslint-plugin
# or
npm install -D @yamada-ui/eslint-plugin
# or
bun add -D @yamada-ui/eslint-plugin
```

## Usage

Add the plugin to your ESLint flat config:

```ts
import yamadaUi from "@yamada-ui/eslint-plugin"

export default [
  yamadaUi.configs.recommended,
  // ...your other configs
]
```

## Contribution

Wouldn't you like to contribute? That's amazing! We have prepared a [contribution guide](https://github.com/yamada-ui/yamada-ui/blob/main/CONTRIBUTING.md) to assist you.

## License

This package is licensed under the terms of the
[MIT license](https://github.com/yamada-ui/yamada-ui/blob/main/LICENSE).
