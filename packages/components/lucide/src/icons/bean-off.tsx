import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BeanOff as LucideBeanOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BeanOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeanOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBeanOffIcon} {...props} />
))

/**
 * @deprecated Use `BeanOffIcon` instead.
 */
export const BeanOff = BeanOffIcon
