import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Scissors as ScissorsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Scissors` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Scissors = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ScissorsIcon} {...props} />
))
