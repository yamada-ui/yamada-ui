import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Heading, Markdown } from '@yamada-ui/react'

export default {
  title: 'Components / Typography / Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>

export const basic: ComponentStory<typeof Markdown> = () => {
  return <Markdown>{README}</Markdown>
}

export const withCodeTheme: ComponentStory<typeof Markdown> = () => {
  return <Markdown code={{ theme: 'materialDark' }}>{README}</Markdown>
}

export const customComponent: ComponentStory<typeof Markdown> = () => {
  return (
    <Markdown
      components={{
        h1: (props) => (
          <Heading
            size='2xl'
            bgGradient='linear(to-l, #f37bdf, #59a9e1)'
            bgClip='text'
            isTruncated
            {...props}
          />
        ),
      }}
    >
      {README}
    </Markdown>
  )
}

const README = `
<p align="center">
  <img src="https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/yamada-ui.png" alt="Yamada UI" width="480" />
</p>

# Branch

- \`main\` - This is a product branch.
- \`hotfix\` - This is a branch for urgent fixes.
- \`dev\` - This is a branch that primarily develops. If you want to create a branch, create it based on this.

# Install

\`\`\`sh:タイトル
$ node -v → v16.**.*
$ pnpm install
$ pnpm build
\`\`\`

# Run - pnpm

\`\`\`sh
$ pnpm storybook
\`\`\`

# Generate Component Package

\`\`\`sh
$ pnpm gen:pkg

$ ? Enter package name: data-display
$ ? Enter first component name: scroll-area
$ ? Does this use a provider?: No
\`\`\`

- Please enter package and component names in kebab case
- If the provider is true, then it is wrapped with a provider that contains the style to be used by the children.

# Generate Component

\`\`\`sh
$ pnpm gen:component

$ ? Enter component name: font-awesome-icon
$ ? Where does this belong?: media-and-icons
$ ? Does this use a provider?: Yes
\`\`\`

- Please enter package and component names in kebab case
- If the provider is true, then it is wrapped with a provider that contains the style to be used by the children.

# Usage

1.Wrap your application with the \`UIProvider\` provided

\`\`\`tsx
import { UIProvider } from 'ui'

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
\`\`\`

Yamada-ui supports light and dark modes by default

2.Now you can start using components like so

\`\`\`tsx
import { Box, Text } from 'ui'

const Example = () => {
  return (
    <Box>
      <Text>ギャルのパンティーおくれーーーっ！！！！！</Text>
    </Box>
  )
}
\`\`\`

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
- [popperjs](https://popper.js.org/docs/v2/migration-guide/)
- [babel](https://babeljs.io/)
- [plop](https://plopjs.com/)
- [turbo](https://turborepo.org/)
- [tsup](https://tsup.egoist.dev/)
- [ts-node](https://typestrong.org/ts-node/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
`
