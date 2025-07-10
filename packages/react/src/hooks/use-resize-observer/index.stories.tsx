import type { Meta } from "@storybook/react-vite"
import { useResizeObserver } from "."
import { Button } from "../../components/button"
import { Text } from "../../components/text"
import { useBoolean } from "../use-boolean"

const meta: Meta = {
  title: "Hooks / useResizeObserver",
}

export default meta

export const Basic = () => {
  const [flg, { toggle }] = useBoolean()

  const [ref, rect] = useResizeObserver<HTMLButtonElement>()

  return (
    <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button
        ref={ref}
        h={flg ? "xl" : "sm"}
        w={flg ? "xl" : "sm"}
        onClick={toggle}
      >
        Click me to toggle the boolean value
      </Button>
    </>
  )
}
