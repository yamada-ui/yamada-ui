import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Spade as LucideSpadeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SpadeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SpadeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSpadeIcon} {...props} />
))

/**
 * @deprecated Use `SpadeIcon` instead.
 */
export const Spade = SpadeIcon
