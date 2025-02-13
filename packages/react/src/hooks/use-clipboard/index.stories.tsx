import type { Meta } from "@storybook/react"
import { useClipboard } from "."
import { Button } from "../../components/button"
import {
  Editable,
  EditableInput,
  EditablePreview,
} from "../../components/editable"
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
      <HStack gap="md">
        <Input
          placeholder="text to be copied..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable placeholder="Paste here">
        <EditablePreview width="full" />
        <EditableInput />
      </Editable>
    </>
  )
}

export const Timeout = () => {
  const { copied, setValue, value, onCopy } = useClipboard("", 5000)

  return (
    <>
      <HStack gap="md">
        <Input
          placeholder="text to be copied..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable placeholder="Paste here">
        <EditablePreview width="full" />
        <EditableInput />
      </Editable>
    </>
  )
}

export const DirectCopy = () => {
  const { copied, onCopy } = useClipboard()

  const value = "孫悟空"

  return (
    <HStack gap="md">
      <Input readOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </HStack>
  )
}
