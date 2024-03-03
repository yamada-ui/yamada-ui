# @yamada-ui/core

Styled API for creating atomic, theme-aware component styling.

## Installation

```sh
$ pnpm add @yamada-ui/core
```

or

```sh
$ yarn add @yamada-ui/core
```

or

```sh
$ npm install @yamada-ui/core
```

## Problem

In modern web development, we have lots of solutions and architectures that have
tried to unify how components are styled. We've seen CSS architectures like BEM,
SMACSS, etc, and frameworks like Bootstrap, and Tailwind CSS.

While these solutions work great, we still think there is a sheer amount of work
required to create a fully customizable, theme-aware component.

Moreover, Many existing UI component libraries, which have been around for a long time, are facing challenges in aligning with the requirements of modern web development.

## Solutions

### UI Elements

Yamada UI provides enhanced JSX elements that can be styled directly via props, or
can accept the common `sx` prop for custom styles.

We'll provide a ui function, just like styled-components. Users can create
any component using the `ui.[element]`. The resulting component will be a
styled component and have all system props.

```jsx
<ui.div bg="green" _hover={{ bg: "red" }}>Hover me</ui.div>

<ui.h1 fontSize="2rem">Yamada UI</ui.h1>

// create your own box
const Box = ui.div

// or

const Box = ui("div", {
  baseStyle: {
    // ... your styles
  }
})

// you can still use the `as` prop
<Box as="h1">This is my box</Box>

// components that inherit the logic of Yamada UI.
const UIComponent = ui(YourComponent)
```

## Contribution

Wouldn't you like to contribute? That's amazing! We have prepared a [contribution guide](https://github.com/yamada-ui/yamada-ui/blob/main/CONTRIBUTING.md) to assist you.

## License

This package is licensed under the terms of the
[MIT license](https://github.com/yamada-ui/yamada-ui/blob/main/LICENSE).
