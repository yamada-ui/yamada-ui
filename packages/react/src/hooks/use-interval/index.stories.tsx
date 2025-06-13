import type { Meta } from "@storybook/react-vite"
import { useState } from "react"
import { useInterval } from "."
import { Box } from "../../components/box"

const meta: Meta = {
  title: "Hooks / useInterval",
}

export default meta

export const Basic = () => {
  const [state, setState] = useState<number>(1)

  useInterval(() => setState((prev) => prev + 1), 3000)

  return <Box>Current state: {state}</Box>
}
