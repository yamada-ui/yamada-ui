import type { Meta } from "@storybook/react"
import { Button, Text, useBoolean, usePrevious } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / usePrevious",
}

export default meta

export const basic = () => {
  const [flg, { toggle }] = useBoolean()

  const prevFlg = usePrevious(flg)

  return (
    <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? "none")}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>
  )
}
