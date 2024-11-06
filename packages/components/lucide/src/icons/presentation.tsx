import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Presentation as LucidePresentationIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PresentationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PresentationIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePresentationIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PresentationIcon` instead.
 */
export const Presentation = PresentationIcon
