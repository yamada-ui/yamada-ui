import { forwardRef } from "@yamada-ui/core"
import { ArrowDownNarrowWide as ArrowDownNarrowWideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `ArrowDownNarrowWide` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownNarrowWide = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ArrowDownNarrowWideIcon} {...props} />
  ),
)