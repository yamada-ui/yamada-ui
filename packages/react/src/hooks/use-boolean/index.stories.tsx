import type { Meta } from "@storybook/react-vite"
import { useBoolean } from "."
import { Button } from "../../components/button"
import { Text } from "../../components/text"

const meta: Meta = {
  title: "Hooks / useBoolean",
}

export default meta

export const Basic = () => {
  const [flg, { toggle }] = useBoolean()

  return (
    <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>
  )
}

export const OnAndOff = () => {
  const [flg, { off, on }] = useBoolean()

  return (
    <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>
  )
}
