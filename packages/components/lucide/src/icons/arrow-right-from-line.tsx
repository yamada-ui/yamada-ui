import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowRightFromLine as LucideArrowRightFromLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowRightFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightFromLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowRightFromLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowRightFromLineIcon` instead.
 */
export const ArrowRightFromLine = ArrowRightFromLineIcon
