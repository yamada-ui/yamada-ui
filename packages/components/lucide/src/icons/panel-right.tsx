import { forwardRef } from "@yamada-ui/core"
import { PanelRight as PanelRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelRightProps = LucideIconProps

/**
 * `PanelRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRight = forwardRef<PanelRightProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PanelRightIcon} {...props} />
))
