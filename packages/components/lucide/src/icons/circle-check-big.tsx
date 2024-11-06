import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleCheckBig as LucideCircleCheckBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleCheckBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleCheckBigIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleCheckBigIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleCheckBigIcon` instead.
 */
export const CircleCheckBig = CircleCheckBigIcon
