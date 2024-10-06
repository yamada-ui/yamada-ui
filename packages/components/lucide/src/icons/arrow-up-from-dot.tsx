import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUpFromDot as ArrowUpFromDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUpFromDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromDot = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowUpFromDotIcon} {...props} />,
)
