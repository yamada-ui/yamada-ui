import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Percent as LucidePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PercentIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePercentIcon} {...props} />
))

/**
 * @deprecated Use `PercentIcon` instead.
 */
export const Percent = PercentIcon
