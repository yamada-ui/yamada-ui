import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bolt as LucideBoltIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BoltIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoltIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBoltIcon} {...props} />
))

/**
 * @deprecated Use `BoltIcon` instead.
 */
export const Bolt = BoltIcon
