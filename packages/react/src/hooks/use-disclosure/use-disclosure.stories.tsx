import type { Meta } from "@storybook/react-vite"
import { Button } from "../../components/button"
import { Modal } from "../../components/modal"
// import { Dialog } from "../../components/modal"
import { Text } from "../../components/text"
import { useDisclosure } from "./use-disclosure"

const meta: Meta = {
  title: "Hooks / useDisclosure",
}

export default meta

export const Basic = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Modal.Root
        body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"
        cancel="わけない"
        open={open}
        success="わける"
        title="孫悟空"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      />
    </>
  )
}

export const Toggle = () => {
  const { open, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Please Click</Button>

      {open ? <Text>Hey!</Text> : null}
    </>
  )
}

export const Chain = () => {
  const { open, onClose, onOpen } = useDisclosure<string, string>({
    onClose: (value) => {
      console.log("onClose:", value)
    },
    onOpen: (value) => {
      console.log("onOpen:", value)
    },
  })

  return (
    <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Modal.Root
        body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"
        cancel="わけない"
        open={open}
        success="わける"
        title="孫悟空"
        onCancel={() => onClose("This is arg")}
        onClose={() => onClose("This is arg")}
        onSuccess={() => onClose("This is arg")}
      />
    </>
  )
}
