import { forwardRef } from "@yamada-ui/core"
import { PanelBottom as PanelBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelBottomProps = LucideIconProps

/**
 * `PanelBottom` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottom = forwardRef<PanelBottomProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PanelBottomIcon} {...props} />
))
