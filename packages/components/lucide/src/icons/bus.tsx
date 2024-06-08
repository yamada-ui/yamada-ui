import { forwardRef } from "@yamada-ui/core"
import { Bus as BusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BusProps = LucideIconProps

/**
 * `Bus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bus = forwardRef<BusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BusIcon} {...props} />
))
