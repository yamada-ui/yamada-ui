import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Minus as LucideMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MinusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMinusIcon} {...props} />
))

/**
 * @deprecated Use `MinusIcon` instead.
 */
export const Minus = MinusIcon
