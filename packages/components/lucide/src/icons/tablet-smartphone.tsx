import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TabletSmartphone as LucideTabletSmartphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TabletSmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TabletSmartphoneIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTabletSmartphoneIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TabletSmartphoneIcon` instead.
 */
export const TabletSmartphone = TabletSmartphoneIcon
