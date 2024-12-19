import type { Meta } from "@storybook/react"
import type { FC } from "react"
import { Button } from "../../components/button"
import { UIProvider } from "../../providers/ui-provider"
import { extendConfig } from "../../utils"
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
  const [isLoading, onClick] = useAsyncCallback(async () => {
    await wait(3000)
  }, [])

  return (
    <Button isLoading={isLoading} onClick={onClick}>
      Click me
    </Button>
  )
}

export const WithLoading = () => {
  const [isLoading, onClick] = useAsyncCallback(
    async () => {
      await wait(3000)
    },
    [],
    { loading: "page" },
  )

  return (
    <Button isLoading={isLoading} onClick={onClick}>
      Click me
    </Button>
  )
}

export const WithConfig = () => {
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
  const [isLoading, onClick] = useAsyncCallback(async () => {
    await wait(3000)
  }, [])

  return (
    <Button isLoading={isLoading} onClick={onClick}>
      Click me
    </Button>
  )
}
