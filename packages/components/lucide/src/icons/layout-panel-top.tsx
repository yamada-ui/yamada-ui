import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutPanelTop as LucideLayoutPanelTopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutPanelTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelTopIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLayoutPanelTopIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LayoutPanelTopIcon` instead.
 */
export const LayoutPanelTop = LayoutPanelTopIcon
