import type { Meta } from "@storybook/react"
import { Button, Center, useOutsideClick } from "@yamada-ui/react"
import { useRef, useState } from "react"

const meta: Meta = {
  title: "Hooks / useOutsideClick",
}

export default meta

export const basic = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useOutsideClick({
    ref,
    handler: () => setOpen(false),
  })

  return open ? (
    <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center>
  ) : (
    <Button onClick={() => setOpen(true)}>Please Click</Button>
  )
}
