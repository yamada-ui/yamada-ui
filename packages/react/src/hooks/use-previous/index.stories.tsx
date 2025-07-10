import type { Meta } from "@storybook/react-vite"
import { usePrevious } from "."
import { Button } from "../../components/button"
import { Text } from "../../components/text"
import { useBoolean } from "../use-boolean"

const meta: Meta = {
  title: "Hooks / usePrevious",
}

export default meta

export const Basic = () => {
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
