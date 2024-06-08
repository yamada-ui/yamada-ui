import { forwardRef } from "@yamada-ui/core"
import { PanelBottomDashed as PanelBottomDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelBottomDashedProps = LucideIconProps

/**
 * `PanelBottomDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomDashed = forwardRef<PanelBottomDashedProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={PanelBottomDashedIcon} {...props} />
  ),
)
