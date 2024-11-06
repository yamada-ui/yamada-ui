import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Salad as LucideSaladIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SaladIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SaladIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSaladIcon} {...props} />
))

/**
 * @deprecated Use `SaladIcon` instead.
 */
export const Salad = SaladIcon
