import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookHeadphones as LucideBookHeadphonesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookHeadphonesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookHeadphonesIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBookHeadphonesIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BookHeadphonesIcon` instead.
 */
export const BookHeadphones = BookHeadphonesIcon
