import type { Meta } from "@storybook/react"
import { useMemo } from "react"
import { Box } from "../../components/box"
import { useCSS } from "./use-css"

const meta: Meta<typeof Box> = {
  title: "Hooks / useCSS",
}

export default meta

export const Basic = () => {
  const className = useCSS({
    bg: "primary",
    color: "white",
    p: "md",
    rounded: "md",
  })

  return <Box className={className}>Box</Box>
}

export const Memoization = () => {
  const css = useMemo(
    () => ({
      bg: "primary",
      color: "white",
      p: "md",
      rounded: "md",
    }),
    [],
  )

  const className = useCSS(css)

  return <Box className={className}>Box</Box>
}
