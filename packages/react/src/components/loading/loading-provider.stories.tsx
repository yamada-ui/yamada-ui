import type { FC } from "react"
import { useCallback, useEffect } from "react"
import { UIProvider } from "../../providers/ui-provider"
import { defaultConfig } from "../../theme"
import { merge } from "../../utils"
import { Button } from "../button"
import { Wrap } from "../wrap"
import { useLoading } from "./loading-provider"

export default {
  title: "Theme / Loading",
}

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const Basic = () => {
  const config = merge(defaultConfig, {
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

export const UseInitialState = () => {
  const config = merge(defaultConfig, {
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

const App: FC = () => {
  const { background, page, screen } = useLoading()

  return (
    <Wrap gap="md">
      <Button onClick={() => screen.start()}>Start screen loading</Button>
      <Button onClick={() => page.start()}>Start page loading</Button>
      <Button onClick={() => background.start()}>
        Start background loading
      </Button>
    </Wrap>
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
    <Wrap gap="md">
      <Button onClick={() => screen.start()}>Start screen loading</Button>
      <Button onClick={() => page.start()}>Start page loading</Button>
      <Button onClick={() => background.start()}>
        Start background loading
      </Button>
    </Wrap>
  )
}
