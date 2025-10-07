import type { Meta } from "@storybook/react-vite"
import type { FC } from "react"
import { extendConfig, UIProvider } from "../../providers/ui-provider"
import { Button } from "../button"
import { useNotice } from "./use-notice"

const meta: Meta = {
  parameters: { layout: "centered" },
  title: "Theme / Notice",
}

export default meta

export const Basic = () => {
  const config = extendConfig({
    notice: {
      limit: 10,
      placement: "end-start",
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
  )
}
