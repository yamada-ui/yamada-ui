import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareM as LucideSquareMIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareMIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareMIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSquareMIcon} {...props} />
))

/**
 * @deprecated Use `SquareMIcon` instead.
 */
export const SquareM = SquareMIcon
