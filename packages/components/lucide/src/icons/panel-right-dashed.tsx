import { forwardRef } from "@yamada-ui/core"
import { PanelRightDashed as PanelRightDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelRightDashedProps = LucideIconProps

/**
 * `PanelRightDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightDashed = forwardRef<PanelRightDashedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelRightDashedIcon} {...props} />,
)
