import { ui, HTMLUIProps } from "@yamada-ui/core"

export type CenterProps = HTMLUIProps<"div">

export const Center = ui("div", {
  baseStyle: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
})
