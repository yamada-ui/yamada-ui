import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleX as LucideCircleXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCircleXIcon} {...props} />
))

/**
 * @deprecated Use `CircleXIcon` instead.
 */
export const CircleX = CircleXIcon
