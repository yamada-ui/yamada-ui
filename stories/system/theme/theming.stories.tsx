import {
  Badge,
  Tag,
  Button,
  VStack,
  HStack,
  Wrap,
  Heading,
  Container,
  Center,
  Image,
  UIProvider,
  defaultTheme,
  extendTheme,
  extendConfig,
  useTheme,
  UsageTheme,
} from '@yamada-ui/react'
import { FC } from 'react'

export default {
  title: 'System / Theme / Theming',
}

export const dynamicTheming = () => {
  const pinkTheme = extendTheme({
    colors: {
      primary: '#D53F8C',
      secondary: '#ED64A6',
    },
  })

  const purpleTheme = extendTheme({
    colors: {
      primary: '#805AD5',
      secondary: '#9F7AEA',
    },
  })

  const greenTheme = extendTheme({
    colors: {
      primary: '#38A169',
      secondary: '#48BB78',
    },
  })

  const theme = { Default: defaultTheme, Pink: pinkTheme, Purple: purpleTheme, Green: greenTheme }
  const config = extendConfig({ initialThemeScheme: 'Default' })

  const App: FC = () => {
    const { themeScheme, changeThemeScheme } = useTheme()

    return (
      <VStack>
        <HStack>
          <Button colorStyle='gray' onClick={() => changeThemeScheme('Default')}>
            Default Theme
          </Button>
          <Button colorStyle='pink' onClick={() => changeThemeScheme('Pink')}>
            Pink Theme
          </Button>
          <Button colorStyle='purple' onClick={() => changeThemeScheme('Purple')}>
            Purple Theme
          </Button>
          <Button colorStyle='green' onClick={() => changeThemeScheme('Green')}>
            Green Theme
          </Button>
        </HStack>

        <Container
          p='md'
          gap='md'
          rounded='md'
          border='1px solid'
          borderColor={['border', 'blackAlpha.200']}
          boxShadow='md'
        >
          <Heading>{themeScheme} Theme</Heading>

          <Wrap gap='md'>
            <Badge colorStyle='primary'>Primary</Badge>
            <Badge colorStyle='secondary'>Secondary</Badge>
            <Badge colorStyle='warning'>Warning</Badge>
            <Badge colorStyle='danger'>Danger</Badge>
          </Wrap>

          <Wrap gap='md'>
            <Tag colorStyle='primary'>Primary</Tag>
            <Tag colorStyle='secondary'>Secondary</Tag>
            <Tag colorStyle='warning'>Warning</Tag>
            <Tag colorStyle='danger'>Danger</Tag>
          </Wrap>

          <Wrap gap='md'>
            <Button colorStyle='primary' size='sm'>
              Primary
            </Button>
            <Button colorStyle='secondary' size='sm'>
              Secondary
            </Button>
            <Button colorStyle='warning' size='sm'>
              Warning
            </Button>
            <Button colorStyle='danger' size='sm'>
              Danger
            </Button>
          </Wrap>
        </Container>
      </VStack>
    )
  }

  return (
    <UIProvider theme={theme} config={config}>
      <App />
    </UIProvider>
  )
}

export const extendTheming = () => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const overrideTheming = () => {
  const theme: UsageTheme = {
    /**
     * Define the theme you want to customize
     */
    styles: {
      globalStyle: {
        fontFamily: 'body',
        bg: ['white', 'black'],
        color: ['black', 'white'],
      },
    },
  }

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Image
        maxW='32rem'
        src='https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/yamada-ui.png'
      />
    </Center>
  )
}
