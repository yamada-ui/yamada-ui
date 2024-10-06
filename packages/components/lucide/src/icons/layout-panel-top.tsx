import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutPanelTop as LayoutPanelTopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutPanelTop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelTop = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LayoutPanelTopIcon} {...props} />,
)
