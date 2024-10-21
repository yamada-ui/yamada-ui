import type { Meta } from "@storybook/react"
import { Input, Kbd, Text, useOS, useWindowEvent } from "@yamada-ui/react"
import { useRef } from "react"

const meta: Meta = {
  title: "Hooks / useWindowEvent",
}

export default meta

export const basic = () => {
  const os = useOS()
  const isMac = os === "macos"
  const inputRef = useRef<HTMLInputElement>(null)

  useWindowEvent("keydown", (ev) => {
    if (ev.code === "KeyK" && (ev.ctrlKey || ev.metaKey)) {
      ev.preventDefault()
      inputRef.current?.focus()
    }
  })

  return (
    <>
      <Text>
        Focus: <Kbd>{isMac ? "Cmd" : "Ctrl"}</Kbd> + <Kbd>K</Kbd>
      </Text>
      <Input ref={inputRef} />
    </>
  )
}
