import type { Meta } from "@storybook/react"
import { useMemo } from "react"
import { Box, useCSS } from "@yamada-ui/react"

const meta: Meta<typeof Box> = {
  title: "Hooks / useCSS",
}

export default meta

export const basic = () => {
  const className = useCSS({
    p: "md",
    rounded: "md",
    bg: "primary",
    color: "white",
  })

  return <Box className={className}>Box</Box>
}

export const memoization = () => {
  const css = useMemo(
    () => ({
      p: "md",
      rounded: "md",
      bg: "primary",
      color: "white",
    }),
    [],
  )

  const className = useCSS(css)

  return <Box className={className}>Box</Box>
}
