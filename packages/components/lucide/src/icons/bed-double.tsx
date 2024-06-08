import { forwardRef } from "@yamada-ui/core"
import { BedDouble as BedDoubleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BedDoubleProps = LucideIconProps

/**
 * `BedDouble` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BedDouble = forwardRef<BedDoubleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BedDoubleIcon} {...props} />
))
