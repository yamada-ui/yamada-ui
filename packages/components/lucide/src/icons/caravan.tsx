import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Caravan as CaravanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Caravan` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Caravan = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CaravanIcon} {...props} />
))
