import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalJustifyCenter as AlignHorizontalJustifyCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlignHorizontalJustifyCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalJustifyCenter = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignHorizontalJustifyCenterIcon} {...props} />
  ),
)
