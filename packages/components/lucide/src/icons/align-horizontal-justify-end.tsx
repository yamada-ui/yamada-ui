import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyEnd as AlignHorizontalJustifyEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalJustifyEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyEnd = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignHorizontalJustifyEndIcon} {...props} />
  ),
)
