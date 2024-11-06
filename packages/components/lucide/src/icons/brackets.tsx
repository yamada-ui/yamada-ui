import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Brackets as LucideBracketsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BracketsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BracketsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBracketsIcon} {...props} />
))

/**
 * @deprecated Use `BracketsIcon` instead.
 */
export const Brackets = BracketsIcon
