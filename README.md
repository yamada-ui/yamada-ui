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
```

# Run - pnpm

```sh
$ pnpm storybook
```

# Generate Theme Tokens

```sh
$ pnpm gen:tokens
```

# Usage

1.Wrap your application with the `UIProvider` provided

```tsx
import { UIProvider } from 'ui'

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
```

Yamada-ui supports light and dark modes by default

2.Now you can start using components like so

```tsx
import { Box, Text } from 'ui'

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
- [babel](https://babeljs.io/)
- [turbo](https://turborepo.org/)
- [tsup](https://tsup.egoist.dev/)
- [ts-node](https://typestrong.org/ts-node/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
