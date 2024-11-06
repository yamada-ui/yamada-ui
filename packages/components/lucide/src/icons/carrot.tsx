import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Carrot as LucideCarrotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CarrotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarrotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCarrotIcon} {...props} />
))

/**
 * @deprecated Use `CarrotIcon` instead.
 */
export const Carrot = CarrotIcon
