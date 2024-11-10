import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PanelBottomDashed as OriginalPanelBottomDashed } from "lucide-react"

/**
 * `PanelBottomDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomDashedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalPanelBottomDashed} {...props} />,
)

/**
 * `PanelBottomDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PanelBottomDashedIcon` instead.
 */
export const PanelBottomDashed = PanelBottomDashedIcon
