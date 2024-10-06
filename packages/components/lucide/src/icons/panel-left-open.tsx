import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelLeftOpen as PanelLeftOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelLeftOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftOpen = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelLeftOpenIcon} {...props} />,
)
