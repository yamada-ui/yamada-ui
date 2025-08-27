import type { Meta } from "@storybook/react-vite"
import { useClipboard } from "."
import { Button } from "../../components/button"
import { Editable } from "../../components/editable"
import { Input } from "../../components/input"
import { HStack } from "../../components/stack"

const meta: Meta = {
  title: "Hooks / useClipboard",
}

export default meta

export const Basic = () => {
  const { copied, setValue, value, onCopy } = useClipboard()

  return (
    <>
      <HStack>
        <Input
          placeholder="text to be copied..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable.Root placeholder="Paste here">
        <Editable.Preview width="full" />
        <Editable.Input />
      </Editable.Root>
    </>
  )
}

export const Timeout = () => {
  const { copied, setValue, value, onCopy } = useClipboard("", 5000)

  return (
    <>
      <HStack>
        <Input
          placeholder="text to be copied..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable.Root placeholder="Paste here">
        <Editable.Preview width="full" />
        <Editable.Input />
      </Editable.Root>
    </>
  )
}

export const DirectCopy = () => {
  const { copied, onCopy } = useClipboard()

  const value = "孫悟空"

  return (
    <HStack>
      <Input readOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </HStack>
  )
}
