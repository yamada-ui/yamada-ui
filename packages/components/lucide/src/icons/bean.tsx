import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bean as LucideBeanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BeanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBeanIcon} {...props} />
))

/**
 * @deprecated Use `BeanIcon` instead.
 */
export const Bean = BeanIcon
