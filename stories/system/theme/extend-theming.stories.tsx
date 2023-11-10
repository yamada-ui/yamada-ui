import {
  Center,
  Image,
  Badge,
  Tag,
  Button,
  Wrap,
  UIProvider,
  extendTheme,
  withDefaultSize,
  withDefaultVariant,
  withDefaultColorScheme,
  extendToken,
  extendStyle,
  extendComponentSize,
  extendComponentVariant,
  extendComponentDefaultProps,
  extendComponent,
  ComponentStyle,
  UIStyle,
  ThemeTokens,
  // withDefaultProps,
} from "@yamada-ui/react"
import { FC } from "react"

export default {
  title: "System / Theme / Extend Theming",
}

export const basic = () => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })({
    merge: true, // If false, not merge default themes
    omit: [], // Tokens of default themes you want to omit in the merge
    pick: [], // Tokens of default themes you want to pick in the merge
  })

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const useMultiObject = () => {
  const theme = extendTheme(
    { colors: { black: "#1F2123" } },
    { colors: { white: "#F6F6F6" } },
  )()

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const rewriteDefaultProps = () => {
  // Rewrite default props for specified component
  const theme = extendTheme(
    withDefaultSize({
      size: "lg",
      components: ["Badge", "Tag", "Button"], // If empty, rewrite for all components
    }),
    withDefaultVariant({
      variant: "solid",
      components: ["Badge", "Tag", "Button"], // If empty, rewrite for all components
    }),
    withDefaultColorScheme({
      colorScheme: "primary",
      components: ["Badge", "Tag", "Button"], // If empty, rewrite for all components
    }),
    // or
    // withDefaultProps({
    //   defaultProps: {
    //     size: 'xl',
    //     variant: 'outline',
    //     colorScheme: 'primary',
    //   },
    //   components: ['Badge', 'Tag', 'Button'],
    // }),
  )()

  return (
    <UIProvider theme={theme}>
      <Wrap gap="md" align="flex-start">
        <Badge>Badge</Badge>
        <Tag>Tag</Tag>
        <Button>Button</Button>
      </Wrap>
    </UIProvider>
  )
}

export const othersExtend = () => {
  const resetStyle: UIStyle = extendStyle("resetStyle", {
    /**
     * Define a new style
     */
  })

  const colors: ThemeTokens = extendToken("colors", {
    /**
     * Define the token you want to customize
     */
  })

  const Button: ComponentStyle = extendComponent("Button", {
    /**
     * Define the layout you want to customize
     */
  })

  const Tag: ComponentStyle = {
    baseStyle: {
      /**
       * Define a new style
       */
    },
    variants: extendComponentVariant("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    sizes: extendComponentSize("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    defaultProps: extendComponentDefaultProps("Tag", {
      /**
       * Define the default props you want to customize
       */
    }),
  }

  const theme = extendTheme({
    styles: { resetStyle },
    colors,
    components: { Button, Tag },
  })({ merge: false })

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Image
        w="full"
        maxW="32rem"
        src="https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"
      />
    </Center>
  )
}
