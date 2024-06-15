import { forwardRef } from "@yamada-ui/core"
import { Snail as SnailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SnailProps = LucideIconProps

/**
 * `Snail` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Snail = forwardRef<SnailProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SnailIcon} {...props} />
))
