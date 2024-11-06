import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowsUpFromLine as LucideArrowsUpFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowsUpFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowsUpFromLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowsUpFromLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowsUpFromLineIcon` instead.
 */
export const ArrowsUpFromLine = ArrowsUpFromLineIcon
