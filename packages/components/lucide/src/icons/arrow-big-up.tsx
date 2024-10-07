import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowBigUp as ArrowBigUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowBigUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowBigUpIcon} {...props} />
))
