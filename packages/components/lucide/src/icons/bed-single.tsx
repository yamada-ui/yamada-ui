import { forwardRef } from "@yamada-ui/core"
import { BedSingle as BedSingleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BedSingleProps = LucideIconProps

/**
 * `BedSingle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BedSingle = forwardRef<BedSingleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BedSingleIcon} {...props} />
))
