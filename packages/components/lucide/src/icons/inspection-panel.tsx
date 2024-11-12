import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { InspectionPanel as OriginalInspectionPanel } from "lucide-react"

/**
 * `InspectionPanelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InspectionPanelIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalInspectionPanel} {...props} />,
)

/**
 * `InspectionPanel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `InspectionPanelIcon` instead.
 */
export const InspectionPanel = InspectionPanelIcon
