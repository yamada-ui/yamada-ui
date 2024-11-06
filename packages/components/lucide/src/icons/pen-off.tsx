import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PenOff as LucidePenOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PenOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePenOffIcon} {...props} />
))

/**
 * @deprecated Use `PenOffIcon` instead.
 */
export const PenOff = PenOffIcon
