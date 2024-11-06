import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BringToFront as LucideBringToFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BringToFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BringToFrontIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBringToFrontIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BringToFrontIcon` instead.
 */
export const BringToFront = BringToFrontIcon
