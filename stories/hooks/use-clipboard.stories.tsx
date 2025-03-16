import type { Meta } from "@storybook/react"
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Input,
  useClipboard,
} from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useClipboard",
}

export default meta

export const basic = () => {
  const { hasCopied, setValue, value, onCopy } = useClipboard()

  return (
    <>
      <HStack gap="md">
        <Input
          placeholder="text to be copied..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable placeholder="Paste here">
        <EditablePreview width="full" />
        <EditableInput />
      </Editable>
    </>
  )
}

export const withTimeout = () => {
  const { hasCopied, setValue, value, onCopy } = useClipboard("", 5000)

  return (
    <>
      <HStack gap="md">
        <Input
          placeholder="text to be copied..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable placeholder="Paste here">
        <EditablePreview width="full" />
        <EditableInput />
      </Editable>
    </>
  )
}

export const directCopy = () => {
  const { hasCopied, onCopy } = useClipboard()

  const value = "孫悟空"

  return (
    <HStack gap="md">
      <Input readOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {hasCopied ? "Copied!" : "Copy"}
      </Button>
    </HStack>
  )
}
