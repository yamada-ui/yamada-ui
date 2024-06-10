import { forwardRef } from "@yamada-ui/core"
import { PanelBottomOpen as PanelBottomOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelBottomOpenProps = LucideIconProps

/**
 * `PanelBottomOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomOpen = forwardRef<PanelBottomOpenProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelBottomOpenIcon} {...props} />,
)
