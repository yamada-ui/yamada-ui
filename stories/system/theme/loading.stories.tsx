import { UIProvider, extendConfig, Center, useLoading, Wrap, Button } from '@yamada-ui/react'
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
          variant: 'grid',
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
