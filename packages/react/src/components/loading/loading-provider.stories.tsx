import type { FC } from "react"
import { useCallback, useEffect } from "react"
import { extendConfig, UIProvider } from "../../providers/ui-provider"
import { Button } from "../button"
import { Wrap } from "../wrap"
import { useLoading } from "./loading-provider"

export default {
  parameters: { layout: "centered" },
  title: "Theme / Loading",
}

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

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

export const LoadingCount = () => {
  const config = extendConfig({
    loading: { screen: { loadingCount: 1 } },
  })

  return (
    <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>
  )
}

export const LoadingScheme = () => {
  const config = extendConfig({
    loading: {
      background: { loadingScheme: "puff" },
      page: { loadingScheme: "dots" },
      screen: { loadingScheme: "grid" },
    },
  })

  return (
    <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>
  )
}
