import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FishSymbol as LucideFishSymbolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FishSymbolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishSymbolIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideFishSymbolIcon} {...props} />,
)

/**
 * @deprecated Use `FishSymbolIcon` instead.
 */
export const FishSymbol = FishSymbolIcon
