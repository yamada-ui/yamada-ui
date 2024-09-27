import { forwardRef } from "@yamada-ui/core"
import { AlignVerticalJustifyCenter as AlignVerticalJustifyCenterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `AlignVerticalJustifyCenter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignVerticalJustifyCenter = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={AlignVerticalJustifyCenterIcon} {...props} />
  ),
)
