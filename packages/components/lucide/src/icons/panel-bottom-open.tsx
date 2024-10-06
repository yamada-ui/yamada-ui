import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelBottomOpen as PanelBottomOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelBottomOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomOpen = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelBottomOpenIcon} {...props} />,
)
