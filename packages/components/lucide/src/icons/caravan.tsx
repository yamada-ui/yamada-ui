import { forwardRef } from "@yamada-ui/core"
import { Caravan as CaravanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CaravanProps = LucideIconProps

/**
 * `Caravan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Caravan = forwardRef<CaravanProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CaravanIcon} {...props} />
))
