import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { EthernetPort as LucideEthernetPortIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EthernetPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EthernetPortIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideEthernetPortIcon} {...props} />
  ),
)

/**
 * @deprecated Use `EthernetPortIcon` instead.
 */
export const EthernetPort = EthernetPortIcon
