import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clover as LucideCloverIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloverIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloverIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCloverIcon} {...props} />
))

/**
 * @deprecated Use `CloverIcon` instead.
 */
export const Clover = CloverIcon
