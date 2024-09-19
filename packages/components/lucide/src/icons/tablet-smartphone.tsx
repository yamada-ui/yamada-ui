import { forwardRef } from "@yamada-ui/core"
import { TabletSmartphone as TabletSmartphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `TabletSmartphone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TabletSmartphone = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TabletSmartphoneIcon} {...props} />,
)
