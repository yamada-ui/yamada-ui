import type { ComponentStyle, ThemeTokens, UIStyle } from "@yamada-ui/react"
import type { FC } from "react"
import {
  Badge,
  Button,
  Center,
  extendComponent,
  extendComponentDefaultProps,
  extendComponentSize,
  extendComponentVariant,
  extendStyle,
  extendTheme,
  extendToken,
  Image,
  Tag,
  UIProvider,
  withDefaultColorScheme,
  withDefaultSize,
  withDefaultVariant,
  Wrap,
} from "@yamada-ui/react"

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
      <Wrap align="flex-start" gap="md">
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
    sizes: extendComponentSize("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    variants: extendComponentVariant("Tag", {
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
    colors,
    components: { Button, Tag },
    styles: { resetStyle },
  })({ merge: false })

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Image
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        maxW="32rem"
        w="full"
      />
    </Center>
  )
}
