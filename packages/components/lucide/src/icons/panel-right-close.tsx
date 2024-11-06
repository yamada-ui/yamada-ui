import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelRightClose as LucidePanelRightCloseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelRightCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightCloseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelRightCloseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelRightCloseIcon` instead.
 */
export const PanelRightClose = PanelRightCloseIcon
