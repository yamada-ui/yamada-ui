import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelLeftDashed as PanelLeftDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelLeftDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftDashed = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelLeftDashedIcon} {...props} />,
)
