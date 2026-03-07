<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/readme/hero-banner.svg" />
    <source media="(prefers-color-scheme: light)" srcset="./assets/readme/hero-banner-light.svg" />
    <img alt="Yamada UI - Build beautiful, accessible React apps at lightning speed" src="./assets/readme/hero-banner-light.svg" width="100%" />
  </picture>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@yamada-ui/react"><img alt="npm" src="https://img.shields.io/npm/v/@yamada-ui/react.svg?style=flat&colorA=0d1117&colorB=b388d9" /></a>
  <a href="https://www.npmjs.com/package/@yamada-ui/react"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@yamada-ui/react.svg?style=flat&colorA=0d1117&colorB=7bb4e3" /></a>
  <a href="https://github.com/yamada-ui/yamada-ui/blob/main/LICENSE"><img alt="MIT License" src="https://img.shields.io/github/license/yamada-ui/yamada-ui?style=flat&colorA=0d1117&colorB=e87e8d" /></a>
  <a href="https://github.com/yamada-ui/yamada-ui"><img alt="GitHub stars" src="https://img.shields.io/github/stars/yamada-ui/yamada-ui?style=flat&colorA=0d1117&colorB=b388d9" /></a>
  <a href="https://discord.gg/H7V5RfEDTR"><img alt="Discord" src="https://img.shields.io/discord/1088993599093469224?style=flat&colorA=0d1117&colorB=7bb4e3&label=discord" /></a>
</p>

<p align="center">
  English | <a href="./README.ja.md">日本語</a>
</p>

---

## What is Yamada UI?

**Yamada UI** is a comprehensive React design system delivering **120+ production-ready components**, **34+ hooks**, and an advanced styling system. Built with accessibility, theming, and developer experience as core principles.

```tsx
import { Button, Center, Heading } from "@yamada-ui/react"

function App() {
  return (
    <Center h="100vh" flexDirection="column" gap="md">
      <Heading>Welcome to Yamada UI</Heading>
      <Button colorScheme="primary">Get Started</Button>
    </Center>
  )
}
```

## Features

<table>
<tr>
<td width="50%">

### 120+ Components
Buttons, modals, forms, charts, carousels, calendars, color pickers, data tables -- everything you need for production apps.

</td>
<td width="50%">

### Accessible by Default
WAI-ARIA compliant out of the box. Keyboard navigation, screen reader support, and focus management built into every component.

</td>
</tr>
<tr>
<td width="50%">

### Powerful Theming
Customize colors, spacing, typography, and component styles globally or per-component. Dark mode support included.

</td>
<td width="50%">

### TypeScript First
Full type safety with autocomplete for all props, theme tokens, and style values. No extra setup needed.

</td>
</tr>
<tr>
<td width="50%">

### Style Props
Responsive, theme-aware style props on every component. Write styles inline without sacrificing maintainability.

</td>
<td width="50%">

### 34+ Custom Hooks
`useAnimation`, `useBreakpoint`, `useClipboard`, `useColorMode`, `useDisclosure`, and many more utilities ready to use.

</td>
</tr>
</table>

## Quick Start

### Installation

```bash
npm install @yamada-ui/react
```

### Setup

Wrap your application with `UIProvider`:

```tsx
import { UIProvider } from "@yamada-ui/react"

function App() {
  return (
    <UIProvider>
      <YourApp />
    </UIProvider>
  )
}
```

### Use Components

```tsx
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@yamada-ui/react"

function MyCard() {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Yamada UI</Heading>
      </CardHeader>
      <CardBody>
        <Text>Beautiful, accessible components for React.</Text>
        <Button colorScheme="primary" mt="md">
          Learn More
        </Button>
      </CardBody>
    </Card>
  )
}
```

## Component Categories

| Category | Components |
|----------|-----------|
| **Layout** | Box, Flex, Grid, Stack, Center, Container, AspectRatio, ... |
| **Forms** | Input, Checkbox, Radio, Select, Switch, Slider, DatePicker, ColorPicker, ... |
| **Data Display** | Table, Card, Badge, Tag, List, Timeline, Stat, ... |
| **Feedback** | Alert, Progress, Skeleton, Loading, Toast, ... |
| **Overlay** | Modal, Drawer, Popover, Tooltip, Menu, ... |
| **Navigation** | Tabs, Breadcrumb, Pagination, Link, Steps, ... |
| **Media** | Image, Avatar, Carousel, QRCode, ... |
| **Motion** | Fade, Slide, Collapse, custom animations, ... |
| **Charts** | Line, Bar, Area, Pie, Radar, and more via built-in chart components |

## Documentation

Visit **[yamada-ui.com](https://yamada-ui.com)** for full documentation, guides, and examples.

## Respect

Yamada UI has drawn a lot of inspiration from [Chakra UI](https://github.com/chakra-ui/chakra-ui), [shadcn/ui](https://github.com/shadcn-ui/ui), [MUI](https://github.com/mui/material-ui), and [Mantine](https://github.com/mantinedev/mantine). We are deeply grateful to these projects and their creators for the wonderful experiences they have given us.

## Support

If you find Yamada UI helpful, please consider giving us a star on GitHub. It helps us grow and continue improving the library.

Please support this project with you or your organization. [[Contribute](https://opencollective.com/yamada-ui/contribute)]

### Organizations

<a href="https://opencollective.com/yamada-ui"><img src="https://opencollective.com/yamada-ui/organizations.svg?avatarHeight=40&button=false" /></a>

<a href="https://vercel.com/oss"><img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" /></a>

### Individuals

<a href="https://opencollective.com/yamada-ui"><img src="https://opencollective.com/yamada-ui/individuals.svg?avatarHeight=40" /></a>

## Contributing

Wouldn't you like to contribute? That's amazing! We have prepared a [contribution guide](./CONTRIBUTING.md) to assist you.

If you're interested in contributing to the documentation, please refer to this [contribution guide](https://yamada-ui.com/community/contributing).

## License

MIT © [Hirotomo Yamada](https://github.com/hirotomoyamada)
