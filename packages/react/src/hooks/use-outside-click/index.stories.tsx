import type { Meta } from "@storybook/react"
import { useRef, useState } from "react"
import { useOutsideClick } from "."
import { Button } from "../../components/button"
import { Center } from "../../components/center"

const meta: Meta = {
  title: "Hooks / useOutsideClick",
}

export default meta

export const Basic = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  })

  return isOpen ? (
    <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center>
  ) : (
    <Button onClick={() => setIsOpen(true)}>Please Click</Button>
  )
}
