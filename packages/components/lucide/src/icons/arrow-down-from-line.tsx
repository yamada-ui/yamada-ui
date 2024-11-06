import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowDownFromLine as LucideArrowDownFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowDownFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownFromLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowDownFromLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowDownFromLineIcon` instead.
 */
export const ArrowDownFromLine = ArrowDownFromLineIcon
