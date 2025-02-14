import type { HTMLUIProps } from "../../core"
import { ui } from "../../core"

export interface SpacerProps extends HTMLUIProps {}

export const Spacer = ui("div", {
  base: {
    alignSelf: "stretch",
    flex: 1,
    justifySelf: "stretch",
  },
})

Spacer.__ui__ = "Spacer"
