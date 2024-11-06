import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BedSingle as LucideBedSingleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BedSingleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BedSingleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBedSingleIcon} {...props} />,
)

/**
 * @deprecated Use `BedSingleIcon` instead.
 */
export const BedSingle = BedSingleIcon
