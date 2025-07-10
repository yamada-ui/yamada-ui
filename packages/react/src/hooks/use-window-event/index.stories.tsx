import type { Meta } from "@storybook/react-vite"
import { useRef } from "react"
import { useWindowEvent } from "."
import { Input } from "../../components/input"
import { Kbd } from "../../components/kbd"
import { Text } from "../../components/text"
import { useOS } from "../use-os"

const meta: Meta = {
  title: "Hooks / useWindowEvent",
}

export default meta

export const Basic = () => {
  const os = useOS()
  const isMac = os === "macos"
  const inputRef = useRef<HTMLInputElement | null>(null)

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
