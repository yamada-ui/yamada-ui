import { forwardRef } from "@yamada-ui/core"
import { PanelLeftOpen as PanelLeftOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelLeftOpenProps = LucideIconProps

/**
 * `PanelLeftOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftOpen = forwardRef<PanelLeftOpenProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelLeftOpenIcon} {...props} />,
)
