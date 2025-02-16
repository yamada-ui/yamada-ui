import type { Meta } from "@storybook/react"
import { Button } from "../../components/button"
// import { Dialog } from "../../components/modal"
import { Text } from "../../components/text"
import { usePromiseDisclosure } from "./use-promise-disclosure"

const meta: Meta = {
  title: "Hooks / usePromiseDisclosure",
}

export default meta

export const Basic = () => {
  const {
    // open,
    // onClose,
    onOpen,
    // onSuccess,
  } = usePromiseDisclosure()

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

      {/* TODO: Fix this */}
      {/* <Dialog
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
      </Dialog> */}
    </>
  )
}
