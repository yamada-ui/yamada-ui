import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Network as LucideNetworkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NetworkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NetworkIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideNetworkIcon} {...props} />
))

/**
 * @deprecated Use `NetworkIcon` instead.
 */
export const Network = NetworkIcon
