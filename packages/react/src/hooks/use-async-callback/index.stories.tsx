import type { Meta } from "@storybook/react-vite"
import { Button } from "../../components/button"
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
