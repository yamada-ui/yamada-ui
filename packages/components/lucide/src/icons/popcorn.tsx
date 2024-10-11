import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Popcorn as PopcornIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Popcorn` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Popcorn = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PopcornIcon} {...props} />
))
