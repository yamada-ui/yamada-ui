import type { HTMLUIProps } from "../../core"
import { ui } from "../../core"

export interface SpacerProps extends HTMLUIProps {}

export const Spacer = ui("div", {
  name: "spacer",
  base: {
    alignSelf: "stretch",
    flex: 1,
    justifySelf: "stretch",
  },
})
