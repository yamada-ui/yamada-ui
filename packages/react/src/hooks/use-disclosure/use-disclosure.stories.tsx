import type { Meta } from "@storybook/react"
import { Button } from "../../components/button"
import { Dialog } from "../../components/modal"
import { Text } from "../../components/text"
import { useDisclosure } from "./use-disclosure"

const meta: Meta = {
  title: "Hooks / useDisclosure",
}

export default meta

export const Basic = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={isOpen}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}

export const Toggle = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>
  )
}

export const Chain = () => {
  const { isOpen, onClose, onOpen } = useDisclosure({
    onClose: (...args: string[]) => {
      console.log("Args:", args)
    },
    onOpen: (...args: string[]) => {
      console.log("Args:", args)
    },
  })

  return (
    <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={isOpen}
        success="わける"
        onCancel={() => onClose("This is arg")}
        onClose={() => onClose("This is arg")}
        onSuccess={() => onClose("This is arg")}
      >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>
  )
}
