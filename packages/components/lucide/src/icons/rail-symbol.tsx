import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RailSymbol as LucideRailSymbolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RailSymbolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RailSymbolIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideRailSymbolIcon} {...props} />,
)

/**
 * @deprecated Use `RailSymbolIcon` instead.
 */
export const RailSymbol = RailSymbolIcon
