import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelTopOpen as PanelTopOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelTopOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopOpen = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PanelTopOpenIcon} {...props} />
))
