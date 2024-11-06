import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Luggage as LucideLuggageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LuggageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LuggageIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLuggageIcon} {...props} />
))

/**
 * @deprecated Use `LuggageIcon` instead.
 */
export const Luggage = LuggageIcon
