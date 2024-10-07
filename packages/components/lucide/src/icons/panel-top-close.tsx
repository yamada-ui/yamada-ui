import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelTopClose as PanelTopCloseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelTopClose` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopClose = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelTopCloseIcon} {...props} />,
)
