import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Syringe as LucideSyringeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SyringeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SyringeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSyringeIcon} {...props} />
))

/**
 * @deprecated Use `SyringeIcon` instead.
 */
export const Syringe = SyringeIcon
