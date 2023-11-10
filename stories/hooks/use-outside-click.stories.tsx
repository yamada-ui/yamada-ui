import { Meta } from "@storybook/react"
import { Center, Button, useOutsideClick } from "@yamada-ui/react"
import { useRef, useState } from "react"

const meta: Meta = {
  title: "Hooks / useOutsideClick",
}

export default meta

export const basic = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  })

  return (
    <>
      {isOpen ? (
        <Center ref={ref} h="10" px="4" bg="danger" color="white" rounded="md">
          Hey, Click anywhere outside of me to close.
        </Center>
      ) : (
        <Button onClick={() => setIsOpen(true)}>Please Click</Button>
      )}
    </>
  )
}
