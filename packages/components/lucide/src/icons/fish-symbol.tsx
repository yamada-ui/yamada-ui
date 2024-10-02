import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FishSymbol as FishSymbolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FishSymbol` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishSymbol = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FishSymbolIcon} {...props} />
))
