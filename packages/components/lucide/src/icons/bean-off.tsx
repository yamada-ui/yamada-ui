import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BeanOff as BeanOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BeanOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BeanOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BeanOffIcon} {...props} />
))
