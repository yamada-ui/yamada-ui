import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PencilRuler as LucidePencilRulerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PencilRulerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PencilRulerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePencilRulerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PencilRulerIcon` instead.
 */
export const PencilRuler = PencilRulerIcon
