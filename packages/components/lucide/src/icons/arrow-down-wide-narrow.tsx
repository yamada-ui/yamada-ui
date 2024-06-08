import { forwardRef } from "@yamada-ui/core"
import { ArrowDownWideNarrow as ArrowDownWideNarrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowDownWideNarrowProps = LucideIconProps

/**
 * `ArrowDownWideNarrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownWideNarrow = forwardRef<ArrowDownWideNarrowProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowDownWideNarrowIcon} {...props} />
  ),
)
