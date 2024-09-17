import { forwardRef } from "@yamada-ui/core"
import { AlignRight as AlignRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `AlignRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignRight = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlignRightIcon} {...props} />
))
