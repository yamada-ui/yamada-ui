import type { Meta } from "@storybook/react-vite"
import { useState } from "react"
import { Box } from "../../components/box"
import { useTimeout } from "./"

const meta: Meta = {
  title: "Hooks / useTimeout",
}

export default meta

export const Basic = () => {
  const [state, setState] = useState<number>(1)

  useTimeout(() => setState((prev) => prev + 1), 3000)

  return <Box>Current state: {state}</Box>
}
