import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquarePi as LucideSquarePiIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquarePiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquarePiIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSquarePiIcon} {...props} />
))

/**
 * @deprecated Use `SquarePiIcon` instead.
 */
export const SquarePi = SquarePiIcon
