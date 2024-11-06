import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Smartphone as LucideSmartphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSmartphoneIcon} {...props} />,
)

/**
 * @deprecated Use `SmartphoneIcon` instead.
 */
export const Smartphone = SmartphoneIcon
