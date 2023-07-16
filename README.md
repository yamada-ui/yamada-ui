<p align="center">
  <img src="https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png" alt="Yamada UI" width="480" />
</p>

<p align="center">
  <img alt="NPM Minzip" src="https://img.shields.io/bundlephobia/minzip/@yamada-ui/react"/>
  <a href="https://www.npmjs.com/package/@yamada-ui/react">
    <img alt="MIT License" src="https://img.shields.io/npm/v/@yamada-ui/react"/>
  </a>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@yamada-ui/react.svg?style=flat"/>
  <a href="https://github.com/hirotomoyamada/yamada-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/hirotomoyamada/yamada-ui"/>
  </a>
  <img alt="Github Stars" src="https://img.shields.io/github/stars/hirotomoyamada/yamada-ui" />
  <a href="https://discord.gg/NStNNpjN">
    <img alt="MIT License" src="https://img.shields.io/badge/Chat%20on-Discord-%235865f2"/>
  </a>
</p>

<p align='center'>
  English | <a href='./README.ja.md'>日本語</a>
</p>

Yamada UI is a React UI component library that streamlines the development of cutting-edge web applications and websites. This library offers a diverse range of components that can be easily combined to construct complex user interfaces, incorporating various features such as color modes and animations, which are not typically supported by other React UI component libraries.

## Contents

- [Respect](#respect)
- [Documentation](#documentation)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [CodeSandbox](#codesandbox)
- [Contributing](#contributing)
- [License](#license)

## Respect

Yamada UI has drawn a lot of inspiration from [Chakra UI](https://github.com/chakra-ui/chakra-ui), [MUI](https://github.com/mui/material-ui) and [Mantine UI](https://github.com/mantinedev/mantine). This has brought me wonderful experiences in my life. I am deeply grateful to Segun Adebayo and all the gods who have given me such experiences. And I love them.

## Documentation

Currently, the documentation is only available in [Storybook](https://hirotomoyamada.github.io/yamada-ui/). However, Storybook contains usage instructions for each prop of all the components.

## Features

- Ease of Styling: Yamada UI contains a set of layout components like `Box` and
  `Stack` that make it easy to style your components by passing props.
- Flexible & composable: Yamada UI components are built on top of a React UI
  Primitive for endless composability.
- Animation: Yamada UI provides hooks that allow for easy declaration of animations.
  These hooks can be written similar to CSS animations and are supported by all components.
- Color mode: Yamada UI makes it easy to set values for each color mode in the props of all components.
  This is not currently implemented in any other React UI component library.
- Theme switching: Yamada UI allows users to switch themes.
  Users can adapt their own themes and use web applications and websites.
  This is not currently implemented in any other React UI component library.
- Other features:
  Yamada UI comes with essential loading and notification features that are considered crucial for modern web applications and websites.
  This means you don't have to define them individually yourself.

## Installation

To use Yamada UI components, all you need to install the
`@yamada-ui/react` package.

```sh
$ pnpm add @yamada-ui/react

# or

$ yarn add @yamada-ui/react

# or

$ npm install @yamada-ui/react
```

`@yamada-ui/table` and `@yamada-ui/calendar`, among others,
are not included with `@yamada-ui/react`.
You will need to install them separately.

```sh
# Provide a convenient Table component using `@tanstack/react-table`.
$ pnpm add @yamada-ui/table

# Provide a convenient Calender and datePicker, MonthPicker component
$ pnpm add @yamada-ui/calendar

# Provide a convenient Carousel component using `embla-carousel-react`.
$ pnpm add @yamada-ui/carousel

# Provide a convenient Dropzone component using `react-dropzone`.
$ pnpm add @yamada-ui/dropzone

# Provide a convenient Markdown component using `react-markdown` and `react-syntax-highlighter`.
$ pnpm add @yamada-ui/markdown

# a package for conveniently using `Font Awesome`.
$ pnpm add @yamada-ui/fontawesome
```

## Usage

To get started with using the components, please follow the steps below:

1. Wrap your application with the `UIProvider` provided

```tsx
import { UIProvider } from '@yamada-ui/react'

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
```

Yamada UI supports light and dark modes by default

2. Now you can start using components like so

```tsx
import { Box, Text } from '@yamada-ui/react'

const Example = () => {
  return (
    <Box>
      <Text>ギャルのパンティーおくれーーーっ！！！！！</Text>
    </Box>
  )
}
```

## CodeSandbox

- [JavaScript](https://codesandbox.io/s/yamada-ui-javascript-1m1on8)
- [TypeScript](https://codesandbox.io/s/yamada-ui-typescript-7xqli9)
- [Next.js - Pages](https://codesandbox.io/p/sandbox/yamada-ui-next-js-pages-6d13de)
- [Next.js - App](https://codesandbox.io/p/sandbox/yamada-ui-next-js-app-3911zu)

## Contributing

Wouldn't you like to contribute? That's amazing! We have prepared a [contribution guide](./CONTRIBUTING.md) to assist you.

## License

MIT © [Hirotomo Yamada](https://github.com/hirotomoyamada)
