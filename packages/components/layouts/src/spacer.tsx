import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"

export interface SpacerProps extends HTMLUIProps {}

export const Spacer = ui("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch",
  },
})
