import type { FC } from "react"
import {
  Button,
  Center,
  extendConfig,
  isValidElement,
  Loading,
  Motion,
  Text,
  UIProvider,
  useLoading,
  useTimeout,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useCallback, useEffect } from "react"

export default {
  title: "System / Theme / Loading",
}

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const basic = () => {
  const config = extendConfig({
    loading: {
      background: {
        duration: 5000,
        icon: {
          variant: "grid",
        },
      },
      page: {
        duration: 5000,
        icon: {
          variant: "grid",
        },
      },
      screen: {
        duration: 5000,
        icon: {
          variant: "grid",
        },
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
      background: {
        icon: {
          variant: "dots",
        },
      },
      page: {
        icon: {
          variant: "dots",
        },
      },
      screen: {
        icon: {
          variant: "dots",
        },
        initialState: true,
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
        component: ({ duration, initialState, message, onFinish }) => {
          useTimeout(onFinish, duration)

          return (
            <Motion
              sx={{
                alignItems: "center",
                bg: "blackAlpha.600",
                bottom: 0,
                display: "flex",
                h: "100vh",
                justifyContent: "center",
                left: 0,
                p: "md",
                position: "fixed",
                right: 0,
                top: 0,
                w: "100vw",
                zIndex: 9999,
              }}
              animate="animate"
              exit="exit"
              initial={!initialState ? "initial" : false}
              variants={{
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
                initial: {
                  opacity: 0,
                },
              }}
            >
              <Motion
                sx={{
                  alignItems: "center",
                  bg: ["white", "black"],
                  boxShadow: ["lg", "dark-lg"],
                  display: "flex",
                  flexDirection: "column",
                  gap: "sm",
                  justifyContent: "center",
                  maxW: "md",
                  p: "md",
                  rounded: "md",
                }}
                animate="animate"
                exit="exit"
                initial={!initialState ? "initial" : false}
                variants={{
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
                  initial: {
                    opacity: 0,
                    scale: 0.95,
                  },
                }}
              >
                <Loading fontSize="6xl" variant="dots" />

                <VStack align="center" gap="sm" mb="md">
                  <Text>Downloading files…</Text>
                  {message ? (
                    isValidElement(message) ? (
                      message
                    ) : (
                      <Text lineClamp={3}>{message}</Text>
                    )
                  ) : null}
                </VStack>

                <Button size="sm" onClick={onFinish}>
                  Play to background
                </Button>
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
  const { background, page, screen } = useLoading()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

const AsyncApp: FC = () => {
  const { background, page, screen } = useLoading()

  const fetchData = useCallback(async () => {
    await wait(5000)

    screen.finish()
  }, [screen])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>
          Start background loading
        </Button>
      </Wrap>
    </Center>
  )
}

const CustomApp: FC = () => {
  const { custom } = useLoading()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => custom.start({ duration: 10000 })}>
          Start custom loading
        </Button>
      </Wrap>
    </Center>
  )
}
