import { forwardRef } from "@yamada-ui/core"
import { PanelTop as PanelTopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelTopProps = LucideIconProps

/**
 * `PanelTop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTop = forwardRef<PanelTopProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PanelTopIcon} {...props} />
))
