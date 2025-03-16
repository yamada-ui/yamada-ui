import type { Meta } from "@storybook/react"
import {
  Button,
  Dialog,
  Text,
  useDisclosure,
  usePromiseDisclosure,
} from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useDisclosure",
}

export default meta

export const basic = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
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

export const useToggle = () => {
  const { open, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Please Click</Button>

      {open ? <Text>Hey!</Text> : null}
    </>
  )
}

export const withChain = () => {
  const { open, onClose, onOpen } = useDisclosure({
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
        open={open}
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

export const withPromise = () => {
  const { open, onClose, onOpen, onSuccess } = usePromiseDisclosure()

  const onClick = async () => {
    try {
      await onOpen()

      console.log("あるじゃねえか、サタン!!!")
      console.log("おめえはホントに世界の…")
      console.log("救世主かもな!!!!")
    } catch {
      console.error("地球は滅亡しました")
    }
  }

  return (
    <>
      <Text>だ…大地よ海よ　そして生きているすべての　みんな…</Text>
      <Text>このオラにほんのちょっとずつだけ元気をわけてくれ…！！！</Text>

      <Button onClick={onClick}>わけない</Button>

      <Dialog
        size="2xl"
        cancel="わけない"
        header="ミスター・サタン"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onSuccess}
      >
        <Text>き、きさまらいいかげんにしろーーーっ!!!</Text>
        <Text>さっさと協力しないかーーーっ!!!</Text>
        <Text>
          このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!
        </Text>
      </Dialog>
    </>
  )
}
