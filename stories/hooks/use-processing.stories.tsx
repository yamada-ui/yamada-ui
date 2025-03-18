import type { Meta } from "@storybook/react"
import { Button, useProcessing } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useProcessing",
}

export default meta

export const basic = () => {
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
