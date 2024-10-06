import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Squircle as SquircleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Squircle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Squircle = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquircleIcon} {...props} />
))
