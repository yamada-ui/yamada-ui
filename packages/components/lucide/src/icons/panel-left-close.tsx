import { forwardRef } from "@yamada-ui/core"
import { PanelLeftClose as PanelLeftCloseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelLeftCloseProps = LucideIconProps

/**
 * `PanelLeftClose` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftClose = forwardRef<PanelLeftCloseProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelLeftCloseIcon} {...props} />,
)
