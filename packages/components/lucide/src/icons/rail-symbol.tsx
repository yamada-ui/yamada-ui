import { forwardRef } from "@yamada-ui/core"
import { RailSymbol as RailSymbolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RailSymbolProps = LucideIconProps

/**
 * `RailSymbol` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RailSymbol = forwardRef<RailSymbolProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RailSymbolIcon} {...props} />
))
