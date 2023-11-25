import type { Meta } from "@storybook/react"
import { Button, Text, useBoolean, useResizeObserver } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useResizeObserver",
}

export default meta

export const basic = () => {
  const [flg, { toggle }] = useBoolean()

  const [ref, rect] = useResizeObserver<HTMLButtonElement>()

  return (
    <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button
        ref={ref}
        onClick={toggle}
        w={flg ? "xl" : "sm"}
        h={flg ? "xl" : "sm"}
      >
        Click me to toggle the boolean value
      </Button>
    </>
  )
}
