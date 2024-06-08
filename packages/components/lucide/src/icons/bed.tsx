import { forwardRef } from "@yamada-ui/core"
import { Bed as BedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BedProps = LucideIconProps

/**
 * `Bed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bed = forwardRef<BedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BedIcon} {...props} />
))
