import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelRight as LucidePanelRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePanelRightIcon} {...props} />,
)

/**
 * @deprecated Use `PanelRightIcon` instead.
 */
export const PanelRight = PanelRightIcon
