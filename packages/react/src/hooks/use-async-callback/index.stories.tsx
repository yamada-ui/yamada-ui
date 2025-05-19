import type { Meta } from "@storybook/react"
import type { FC } from "react"
import { Button } from "../../components/button"
import { UIProvider } from "../../providers/ui-provider"
import { defaultConfig } from "../../theme"
import { merge } from "../../utils"
import { useAsyncCallback } from "./"

const meta: Meta = {
  title: "Hooks / useAsyncCallback",
}

export default meta

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const Basic = () => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000)
  }, [])

  return (
    <Button loading={loading} onClick={onClick}>
      Click me
    </Button>
  )
}

export const Loading = () => {
  const [loading, onClick] = useAsyncCallback(
    async () => {
      await wait(3000)
    },
    [],
    { loading: "page" },
  )

  return (
    <Button loading={loading} onClick={onClick}>
      Click me
    </Button>
  )
}

export const Config = () => {
  const config = merge(defaultConfig, {
    loading: {
      defaultComponent: "page",
    },
  })

  return (
    <UIProvider config={config}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000)
  }, [])

  return (
    <Button loading={loading} onClick={onClick}>
      Click me
    </Button>
  )
}
