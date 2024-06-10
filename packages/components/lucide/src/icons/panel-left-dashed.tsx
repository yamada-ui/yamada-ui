import { forwardRef } from "@yamada-ui/core"
import { PanelLeftDashed as PanelLeftDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelLeftDashedProps = LucideIconProps

/**
 * `PanelLeftDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftDashed = forwardRef<PanelLeftDashedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelLeftDashedIcon} {...props} />,
)
