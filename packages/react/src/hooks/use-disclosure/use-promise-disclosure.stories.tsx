import type { Meta } from "@storybook/react-vite"
import { Button } from "../../components/button"
import { Modal } from "../../components/modal"
// import { Dialog } from "../../components/modal"
import { Text } from "../../components/text"
import { usePromiseDisclosure } from "./use-promise-disclosure"

const meta: Meta = {
  title: "Hooks / usePromiseDisclosure",
}

export default meta

export const Basic = () => {
  const { open, onClose, onOpen, onSuccess } = usePromiseDisclosure()

  const onClick = async () => {
    try {
      await onOpen()

      console.log("やるじゃねえか、サタン!!!")
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

      <Modal.Root
        size="2xl"
        body={
          <>
            <Text>き、きさまらいいかげんにしろーーーっ!!!</Text>
            <Text>さっさと協力しないかーーーっ!!!</Text>
            <Text>
              このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!
            </Text>
          </>
        }
        cancel="わけない"
        open={open}
        success="わける"
        title="ミスター・サタン"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onSuccess}
      />
    </>
  )
}
