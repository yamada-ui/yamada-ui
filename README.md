<p align="center">
  <img src="https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/public/yamada-ui.png?raw=true" alt="Yamada UI" width="480" />
</p>

# Branch

`main` This is a product branch.
`hotfix` This is a branch for urgent fixes.
`system` This is a branch that fixes the core of yamada-ui.
`dev` This is a branch that primarily develops.

# Install

```sh
$ node -v → v16.**.*
$ yarn install
```

# Run

```sh
$ yarn dev
$ open http://localhost:4444
```

# Generate Theme Tokens

```sh
$ yarn tokens
```

# Usage

1. Wrap your application with the `UIProvider` provided

```tsx
import { UIProvider } from 'ui'

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
```

Yamada-ui supports light and dark modes by default

2. Now you can start using components like so

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
- [TypeScript](https://www.typescriptlang.org/)
- [Fortawesome](https://fontawesome.com/)
- [emotion/react](https://emotion.sh/docs/@emotion/react)
- [emotion/styled](https://emotion.sh/docs/@emotion/styled)
- [ctrl/tinycolor](https://tinycolor.vercel.app/)
- [react-fast-compare](https://www.npmjs.com/package/react-fast-compare)
- [babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
