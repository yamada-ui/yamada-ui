import type { Meta } from "@storybook/react"
import { Box, useCSS } from "@yamada-ui/react"
import { useMemo } from "react"

const meta: Meta<typeof Box> = {
  title: "Hooks / useCSS",
}

export default meta

export const basic = () => {
  const className = useCSS({
    bg: "primary",
    color: "white",
    p: "md",
    rounded: "md",
  })

  return <Box className={className}>Box</Box>
}

export const memoization = () => {
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
