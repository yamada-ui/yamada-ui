import type { Meta } from "@storybook/react"
import { useProcessing } from "."
import { Button } from "../../components/button"

const meta: Meta = {
  title: "Hooks / useProcessing",
}

export default meta

export const Basic = () => {
  const processing = useProcessing()

  const onClick = () => {
    processing.start()

    setTimeout(() => {
      processing.finish()
    }, 3000)
  }

  return (
    <Button loading={processing.loading} onClick={onClick}>
      Click me
    </Button>
  )
}
