import { forwardRef } from "@yamada-ui/core"
import { PanelsLeftBottom as PanelsLeftBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelsLeftBottomProps = LucideIconProps

/**
 * `PanelsLeftBottom` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsLeftBottom = forwardRef<PanelsLeftBottomProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelsLeftBottomIcon} {...props} />,
)
