import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sun as LucideSunIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SunIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSunIcon} {...props} />
))

/**
 * @deprecated Use `SunIcon` instead.
 */
export const Sun = SunIcon
