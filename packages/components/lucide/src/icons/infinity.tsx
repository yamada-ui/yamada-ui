import { forwardRef } from "@yamada-ui/core"
import { Infinity as InfinityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type InfinityProps = LucideIconProps

/**
 * `Infinity` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Infinity = forwardRef<InfinityProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={InfinityIcon} {...props} />
))
