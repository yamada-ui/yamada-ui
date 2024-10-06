import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ToyBrick as ToyBrickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ToyBrick` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToyBrick = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ToyBrickIcon} {...props} />
))
