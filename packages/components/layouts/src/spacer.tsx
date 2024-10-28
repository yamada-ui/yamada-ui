import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"

export interface SpacerProps extends HTMLUIProps {}

export const Spacer = ui("div", {
  baseStyle: {
    alignSelf: "stretch",
    flex: 1,
    justifySelf: "stretch",
  },
})

Spacer.displayName = "Spacer"
Spacer.__ui__ = "Spacer"
