import { forwardRef } from "@yamada-ui/core"
import { PanelTopOpen as PanelTopOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelTopOpenProps = LucideIconProps

/**
 * `PanelTopOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopOpen = forwardRef<PanelTopOpenProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelTopOpenIcon} {...props} />,
)
