import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Blocks as BlocksIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Blocks` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Blocks = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BlocksIcon} {...props} />
))
