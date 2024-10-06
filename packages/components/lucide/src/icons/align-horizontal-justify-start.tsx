import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyStart as AlignHorizontalJustifyStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalJustifyStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyStart = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignHorizontalJustifyStartIcon} {...props} />
  ),
)
