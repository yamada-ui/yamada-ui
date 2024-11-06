import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Caravan as LucideCaravanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CaravanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaravanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCaravanIcon} {...props} />
))

/**
 * @deprecated Use `CaravanIcon` instead.
 */
export const Caravan = CaravanIcon
