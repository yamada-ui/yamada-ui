import type { Meta } from "@storybook/react-vite"
import { Button } from "../../components/button"
import { wait } from "../../utils"
import { useAsyncCallback } from "./"

const meta: Meta = {
  title: "Hooks / useAsyncCallback",
}

export default meta

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
