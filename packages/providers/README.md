# @yamada-ui/providers

Standalone React provider for Yamada UI component libraries.

## Warning

This package is provided for building custom component libraries, and does not
include any default theme or configurations. If you are not sure why you are
using it, please use `@yamada-ui/react` instead;

## Installation

```sh
$ pnpm add @yamada-ui/providers
```

or

```sh
$ yarn add @yamada-ui/providers
```

or

```sh
$ npm install @yamada-ui/providers
```

## Usage

As the default theme and config is not included, you will need a theme object
following the Yamada UI, augmented
with the following configuration properties.

```
import * as React from "react"

// 1. import `UIProvider` component
import { UIProvider } from "@yamada-ui/provider"

// 2. build your theme and config
const theme = {
  // ... your theme
}

const config = {
  initialColorMode: "light",
  var: { prefix: "ui" },
}

// 3. Use at the root of your app
const container = document.getElementById('app')

const root = createRoot(container!)

root.render(
  <UIProvider theme={theme} config={config}>
    <App />
  </UIProvider>
)

```

## Contribution

Wouldn't you like to contribute? That's amazing! We have prepared a [contribution guide](https://github.com/yamada-ui/yamada-ui/blob/main/CONTRIBUTING.md) to assist you.

## License

This package is licensed under the terms of the
[MIT license](https://github.com/yamada-ui/yamada-ui/blob/main/LICENSE).
