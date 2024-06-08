import { forwardRef } from "@yamada-ui/core"
import { FishSymbol as FishSymbolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FishSymbolProps = LucideIconProps

/**
 * `FishSymbol` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishSymbol = forwardRef<FishSymbolProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FishSymbolIcon} {...props} />
))
