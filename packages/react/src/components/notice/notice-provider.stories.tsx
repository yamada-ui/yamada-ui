import type { FC } from "react"
import { UIProvider } from "../../providers/ui-provider"
import { extendConfig } from "../../tools"
import { Button } from "../button"
import { Center } from "../center"
import { useNotice } from "./notice"

export default {
  title: "Theme / Notice",
}

export const Basic = () => {
  const config = extendConfig({
    notice: {
      options: {
        limit: 3,
        placement: "end-end",
      },
    },
  })

  return (
    <UIProvider config={config}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            description: "オッス！オラ悟空！",
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}
