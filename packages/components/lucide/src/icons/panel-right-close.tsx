import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelRightClose as PanelRightCloseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelRightClose` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightClose = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelRightCloseIcon} {...props} />,
)
