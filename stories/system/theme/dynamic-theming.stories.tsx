import {
  Badge,
  Tag,
  Button,
  VStack,
  HStack,
  Wrap,
  Heading,
  Container,
  UIProvider,
  defaultTheme,
  extendTheme,
  extendConfig,
  useTheme,
} from '@yamada-ui/react'
import { FC } from 'react'

export default {
  title: 'System / Theme / Dynamic Theming',
}

export const basic = () => {
  const pinkTheme = extendTheme({
    colors: {
      primary: '#D53F8C',
      secondary: '#ED64A6',
    },
  })()

  const purpleTheme = extendTheme({
    colors: {
      primary: '#805AD5',
      secondary: '#9F7AEA',
    },
  })()

  const greenTheme = extendTheme({
    colors: {
      primary: '#38A169',
      secondary: '#48BB78',
    },
  })()

  const theme = {
    Default: defaultTheme,
    Pink: pinkTheme,
    Purple: purpleTheme,
    Green: greenTheme,
  }
  const config = extendConfig({ initialThemeScheme: 'Default' })

  const App: FC = () => {
    const { themeScheme, changeThemeScheme } = useTheme()

    return (
      <VStack>
        <HStack>
          <Button
            colorScheme='gray'
            onClick={() => changeThemeScheme('Default')}
          >
            Default Theme
          </Button>
          <Button colorScheme='pink' onClick={() => changeThemeScheme('Pink')}>
            Pink Theme
          </Button>
          <Button
            colorScheme='purple'
            onClick={() => changeThemeScheme('Purple')}
          >
            Purple Theme
          </Button>
          <Button
            colorScheme='green'
            onClick={() => changeThemeScheme('Green')}
          >
            Green Theme
          </Button>
        </HStack>

        <Container
          p='md'
          gap='md'
          rounded='md'
          border='1px solid'
          borderColor='inherit'
          boxShadow='md'
        >
          <Heading>{themeScheme} Theme</Heading>

          <Wrap gap='md'>
            <Badge colorScheme='primary'>Primary</Badge>
            <Badge colorScheme='secondary'>Secondary</Badge>
            <Badge colorScheme='warning'>Warning</Badge>
            <Badge colorScheme='danger'>Danger</Badge>
          </Wrap>

          <Wrap gap='md'>
            <Tag colorScheme='primary'>Primary</Tag>
            <Tag colorScheme='secondary'>Secondary</Tag>
            <Tag colorScheme='warning'>Warning</Tag>
            <Tag colorScheme='danger'>Danger</Tag>
          </Wrap>

          <Wrap gap='md'>
            <Button colorScheme='primary' size='sm'>
              Primary
            </Button>
            <Button colorScheme='secondary' size='sm'>
              Secondary
            </Button>
            <Button colorScheme='warning' size='sm'>
              Warning
            </Button>
            <Button colorScheme='danger' size='sm'>
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

export const useArray = () => {
  const pinkTheme = extendTheme({
    colors: {
      primary: '#D53F8C',
      secondary: '#ED64A6',
    },
  })()

  const purpleTheme = extendTheme({
    colors: {
      primary: '#805AD5',
      secondary: '#9F7AEA',
    },
  })()

  const greenTheme = extendTheme({
    colors: {
      primary: '#38A169',
      secondary: '#48BB78',
    },
  })()

  const theme = [defaultTheme, pinkTheme, purpleTheme, greenTheme]
  const config = extendConfig({ initialThemeScheme: 0 })

  const App: FC = () => {
    const { themeScheme, changeThemeScheme } = useTheme()

    return (
      <VStack>
        <HStack>
          <Button colorScheme='gray' onClick={() => changeThemeScheme(0)}>
            Default Theme
          </Button>
          <Button colorScheme='pink' onClick={() => changeThemeScheme(1)}>
            Pink Theme
          </Button>
          <Button colorScheme='purple' onClick={() => changeThemeScheme(2)}>
            Purple Theme
          </Button>
          <Button colorScheme='green' onClick={() => changeThemeScheme(3)}>
            Green Theme
          </Button>
        </HStack>

        <Container
          p='md'
          gap='md'
          rounded='md'
          border='1px solid'
          borderColor='inherit'
          boxShadow='md'
        >
          <Heading>
            {(() => {
              switch (themeScheme) {
                case 0:
                  return 'Default'

                case 1:
                  return 'Pink'

                case 2:
                  return 'Purple'

                case 3:
                  return 'Green'
              }
            })()}{' '}
            Theme
          </Heading>

          <Wrap gap='md'>
            <Badge colorScheme='primary'>Primary</Badge>
            <Badge colorScheme='secondary'>Secondary</Badge>
            <Badge colorScheme='warning'>Warning</Badge>
            <Badge colorScheme='danger'>Danger</Badge>
          </Wrap>

          <Wrap gap='md'>
            <Tag colorScheme='primary'>Primary</Tag>
            <Tag colorScheme='secondary'>Secondary</Tag>
            <Tag colorScheme='warning'>Warning</Tag>
            <Tag colorScheme='danger'>Danger</Tag>
          </Wrap>

          <Wrap gap='md'>
            <Button colorScheme='primary' size='sm'>
              Primary
            </Button>
            <Button colorScheme='secondary' size='sm'>
              Secondary
            </Button>
            <Button colorScheme='warning' size='sm'>
              Warning
            </Button>
            <Button colorScheme='danger' size='sm'>
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
