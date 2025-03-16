import type { Meta } from "@storybook/react"
import type { FC } from "react"
import {
  Button,
  extendConfig,
  UIProvider,
  useAsyncCallback,
} from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useAsyncCallback",
}

export default meta

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const basic = () => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000)
  }, [])

  return (
    <Button loading={loading} onClick={onClick}>
      Click me
    </Button>
  )
}

export const withLoading = () => {
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

export const withConfig = () => {
  const config = extendConfig({
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
