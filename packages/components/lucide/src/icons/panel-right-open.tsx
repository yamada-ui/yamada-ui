import { forwardRef } from "@yamada-ui/core"
import { PanelRightOpen as PanelRightOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelRightOpenProps = LucideIconProps

/**
 * `PanelRightOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelRightOpen = forwardRef<PanelRightOpenProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelRightOpenIcon} {...props} />,
)
