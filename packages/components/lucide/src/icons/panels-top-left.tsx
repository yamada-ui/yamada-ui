import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelsTopLeft as LucidePanelsTopLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelsTopLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsTopLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelsTopLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelsTopLeftIcon` instead.
 */
export const PanelsTopLeft = PanelsTopLeftIcon
