import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUpFromLine as LucideArrowUpFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUpFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowUpFromLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowUpFromLineIcon` instead.
 */
export const ArrowUpFromLine = ArrowUpFromLineIcon
