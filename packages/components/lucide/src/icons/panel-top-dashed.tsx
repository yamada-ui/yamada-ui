import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelTopDashed as PanelTopDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelTopDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopDashed = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PanelTopDashedIcon} {...props} />,
)
