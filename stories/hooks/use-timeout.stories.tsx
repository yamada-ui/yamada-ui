import { Meta } from "@storybook/react"
import { Box, useTimeout } from "@yamada-ui/react"
import { useState } from "react"

const meta: Meta = {
  title: "Hooks / useTimeout",
}

export default meta

export const basic = () => {
  const [state, setState] = useState<number>(1)

  useTimeout(() => setState((prev) => prev + 1), 3000)

  return <Box>Current state: {state}</Box>
}
