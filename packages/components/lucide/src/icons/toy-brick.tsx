import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ToyBrick as LucideToyBrickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ToyBrickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToyBrickIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideToyBrickIcon} {...props} />
))

/**
 * @deprecated Use `ToyBrickIcon` instead.
 */
export const ToyBrick = ToyBrickIcon
