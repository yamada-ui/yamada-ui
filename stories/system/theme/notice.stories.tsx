import type { FC } from "react"
import {
  Button,
  Center,
  extendConfig,
  UIProvider,
  useNotice,
} from "@yamada-ui/react"

export default {
  title: "System / Theme / Notice",
}

export const basic = () => {
  const config = extendConfig({
    notice: {
      options: {
        limit: 3,
        placement: "bottom-right",
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
