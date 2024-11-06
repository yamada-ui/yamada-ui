import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bed as LucideBedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BedIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBedIcon} {...props} />
))

/**
 * @deprecated Use `BedIcon` instead.
 */
export const Bed = BedIcon
