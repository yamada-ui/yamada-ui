import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Scissors as LucideScissorsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ScissorsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideScissorsIcon} {...props} />
))

/**
 * @deprecated Use `ScissorsIcon` instead.
 */
export const Scissors = ScissorsIcon
