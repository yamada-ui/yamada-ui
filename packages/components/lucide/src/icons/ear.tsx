import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ear as LucideEarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EarIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEarIcon} {...props} />
))

/**
 * @deprecated Use `EarIcon` instead.
 */
export const Ear = EarIcon
