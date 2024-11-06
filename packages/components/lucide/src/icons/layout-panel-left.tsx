import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutPanelLeft as LucideLayoutPanelLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutPanelLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLayoutPanelLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LayoutPanelLeftIcon` instead.
 */
export const LayoutPanelLeft = LayoutPanelLeftIcon
