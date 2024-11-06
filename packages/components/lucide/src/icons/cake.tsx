import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cake as LucideCakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CakeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCakeIcon} {...props} />
))

/**
 * @deprecated Use `CakeIcon` instead.
 */
export const Cake = CakeIcon
