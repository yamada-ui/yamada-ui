<p align="center">
  <img src="https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/yamada-ui.png" alt="Yamada UI" width="480" />
</p>

# Branch

- `main` - This is a product branch.
- `hotfix` - This is a branch for urgent fixes.
- `dev` - This is a branch that primarily develops. If you want to create a branch, create it based on this.

# Install

```sh
$ node -v → v16.**.*
$ pnpm install
$ pnpm build
```

# Run Storybook

```sh
$ pnpm sb
```

# Generate Component Package

```sh
$ pnpm gen:component

$ ? Enter component name: box
$ ? Where does this belong?: layouts
$ ? Does this use a provider?: No
```

- Please enter package and component names in kebab case
- If the provider is true, then it is wrapped with a provider that contains the style to be used by the children.

# Usage

1.Wrap your application with the `UIProvider` provided

```tsx
import { UIProvider } from '@yamada-ui/react'

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
```

Yamada-ui supports light and dark modes by default

2.Now you can start using components like so

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

# Use

- [Next.js](https://nextjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Fortawesome](https://fontawesome.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/)
- [emotion/react](https://emotion.sh/docs/@emotion/react)
- [emotion/styled](https://emotion.sh/docs/@emotion/styled)
- [ctrl/tinycolor](https://tinycolor.vercel.app/)
- [react-fast-compare](https://www.npmjs.com/package/react-fast-compare)
- [react-remove-scroll](https://www.npmjs.com/package/react-remove-scroll)
- [popperjs](https://popper.js.org/docs/v2/migration-guide/)
- [embla-carousel-react](https://www.embla-carousel.com/)
- [babel](https://babeljs.io/)
- [plop](https://plopjs.com/)
- [turbo](https://turborepo.org/)
- [tsup](https://tsup.egoist.dev/)
- [ts-node](https://typestrong.org/ts-node/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
