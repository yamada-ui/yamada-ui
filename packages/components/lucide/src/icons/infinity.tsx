import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Infinity as LucideInfinityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `InfinityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InfinityIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideInfinityIcon} {...props} />
))

/**
 * @deprecated Use `InfinityIcon` instead.
 */
export const Infinity = InfinityIcon
