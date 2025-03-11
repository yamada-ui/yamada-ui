import type { Meta } from "@storybook/react"
import { useLocalStorage } from "."
import { Button } from "../../components/button"
import { Wrap } from "../../components/wrap"

const meta: Meta = {
  title: "Hooks / useLocalStorage",
}

export default meta

export const Basic = () => {
  const [value, setValue, resetValue] = useLocalStorage<number>({
    key: "value",
    defaultValue: 1,
  })

  return (
    <Wrap gap="md">
      <Button onClick={() => setValue((prev) => prev + 1)}>
        Current Local Storage value: {value}
      </Button>

      <Button colorScheme="danger" onClick={resetValue}>
        Reset Local Storage value
      </Button>
    </Wrap>
  )
}
