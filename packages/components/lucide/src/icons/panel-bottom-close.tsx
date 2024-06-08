import { forwardRef } from "@yamada-ui/core"
import { PanelBottomClose as PanelBottomCloseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelBottomCloseProps = LucideIconProps

/**
 * `PanelBottomClose` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomClose = forwardRef<PanelBottomCloseProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelBottomCloseIcon} {...props} />,
)
