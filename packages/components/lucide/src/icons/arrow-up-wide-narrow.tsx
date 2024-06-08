import { forwardRef } from "@yamada-ui/core"
import { ArrowUpWideNarrow as ArrowUpWideNarrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpWideNarrowProps = LucideIconProps

/**
 * `ArrowUpWideNarrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpWideNarrow = forwardRef<ArrowUpWideNarrowProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowUpWideNarrowIcon} {...props} />
  ),
)
