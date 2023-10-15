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
  extendTheme,
  extendConfig,
  useTheme,
} from '@yamada-ui/react'
import { FC } from 'react'

export default {
  title: 'System / Theme / Switch Theming',
}

export const basic = () => {
  const theme = extendTheme({
    themeSchemes: {
      pink: {
        semantics: {
          colors: {
            primary: 'pink.500',
            secondary: 'violet.500',
          },
          colorSchemes: {
            primary: 'pink',
            secondary: 'violet',
          },
        },
      },
      purple: {
        semantics: {
          colors: {
            primary: 'purple.500',
            secondary: 'teal.500',
          },
          colorSchemes: {
            primary: 'purple',
            secondary: 'teal',
          },
        },
      },
      green: {
        semantics: {
          colors: {
            primary: 'green.500',
            secondary: 'cyan.500',
          },
          colorSchemes: {
            primary: 'green',
            secondary: 'cyan',
          },
        },
      },
    },
  })()
  const config = extendConfig({ initialThemeScheme: 'pink' })

  const App: FC = () => {
    const { themeScheme, changeThemeScheme } = useTheme()

    return (
      <VStack>
        <HStack>
          <Button colorScheme='gray' onClick={() => changeThemeScheme('base')}>
            Base Theme
          </Button>
          <Button colorScheme='pink' onClick={() => changeThemeScheme('pink')}>
            Pink Theme
          </Button>
          <Button
            colorScheme='purple'
            onClick={() => changeThemeScheme('purple')}
          >
            Purple Theme
          </Button>
          <Button
            colorScheme='green'
            onClick={() => changeThemeScheme('green')}
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
