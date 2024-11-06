import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowLeftFromLine as LucideArrowLeftFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowLeftFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftFromLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowLeftFromLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowLeftFromLineIcon` instead.
 */
export const ArrowLeftFromLine = ArrowLeftFromLineIcon
