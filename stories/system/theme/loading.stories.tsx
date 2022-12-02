import {
  UIProvider,
  extendConfig,
  Center,
  useLoading,
  Wrap,
  Button,
  useTimeout,
  Loading,
  Motion,
  Text,
  isValidElement,
  VStack,
} from '@yamada-ui/react'
import { FC, useEffect, useCallback } from 'react'

export default {
  title: 'System / Theme / Loading',
}

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const basic = () => {
  const config = extendConfig({
    loading: {
      screen: {
        icon: {
          variant: 'grid',
        },
        timeout: 5000,
      },
      page: {
        icon: {
          variant: 'grid',
        },
        timeout: 5000,
      },
      background: {
        icon: {
          variant: 'grid',
        },
        timeout: 5000,
      },
    },
  })

  return (
    <UIProvider config={config}>
      <App />
    </UIProvider>
  )
}

export const useInitialState = () => {
  const config = extendConfig({
    loading: {
      screen: {
        initialState: true,
        icon: {
          variant: 'dots',
        },
      },
      page: {
        icon: {
          variant: 'dots',
        },
      },
      background: {
        icon: {
          variant: 'dots',
        },
      },
    },
  })

  return (
    <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>
  )
}

export const useCustomLoading = () => {
  const config = extendConfig({
    loading: {
      custom: {
        component: ({ initialState, message, timeout, onFinish }) => {
          useTimeout(onFinish, timeout)

          return (
            <Motion
              initial={!initialState ? 'initial' : false}
              animate='animate'
              exit='exit'
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.4, 0, 1, 1],
                  },
                },
              }}
              sx={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 9999,
                bg: 'blackAlpha.600',
                w: '100vw',
                h: '100vh',
                p: 'md',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Motion
                initial={!initialState ? 'initial' : false}
                animate='animate'
                exit='exit'
                variants={{
                  initial: {
                    opacity: 0,
                    scale: 0.95,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.95,
                    transition: {
                      duration: 0.4,
                      ease: [0.4, 0, 1, 1],
                    },
                  },
                }}
                sx={{
                  bg: ['white', 'black'],
                  maxW: 'md',
                  p: 'md',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 'sm',
                  rounded: 'md',
                  boxShadow: ['lg', 'dark-lg'],
                }}
              >
                <Loading variant='dots' size='6xs' />
                <VStack align='center' mb='md' gap='sm'>
                  <Text>Downloading files…</Text>
                  {message ? (
                    isValidElement(message) ? (
                      message
                    ) : (
                      <Text noOfLines={3}>{message}</Text>
                    )
                  ) : null}
                </VStack>
                <Button onClick={onFinish}>Play to background</Button>
              </Motion>
            </Motion>
          )
        },
      },
    },
  })

  return (
    <UIProvider config={config}>
      <CustomApp />
    </UIProvider>
  )
}

const App: FC = () => {
  const { screen, page, background } = useLoading()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>Start background loading</Button>
      </Wrap>
    </Center>
  )
}

const AsyncApp: FC = () => {
  const { screen, page, background } = useLoading()

  const fetchData = useCallback(async () => {
    await wait(5000)

    screen.finish()
  }, [screen])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>Start background loading</Button>
      </Wrap>
    </Center>
  )
}

const CustomApp: FC = () => {
  const { custom } = useLoading()

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => custom.start({ timeout: 10000 })}>Start custom loading</Button>
      </Wrap>
    </Center>
  )
}
