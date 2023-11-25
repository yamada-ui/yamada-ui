import type { Meta } from "@storybook/react"
import { Text, useMediaQuery } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useMediaQuery",
}

export default meta

export const basic = () => {
  const [flg] = useMediaQuery("(min-width: 1280px)")

  return <Text>{flg ? "larger than 1280px" : "smaller than 1280px"}</Text>
}

export const useMulti = () => {
  const [isLarge, isDark] = useMediaQuery([
    "(min-width: 1280px)",
    "(prefers-color-scheme: dark)",
  ])

  return (
    <>
      <Text>{isLarge ? "larger than 1280px" : "smaller than 1280px"}</Text>
      <Text>{isDark ? "color mode is dark" : "color mode is light"}</Text>
    </>
  )
}
