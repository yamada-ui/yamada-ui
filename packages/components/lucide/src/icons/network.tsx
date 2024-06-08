import { forwardRef } from "@yamada-ui/core"
import { Network as NetworkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NetworkProps = LucideIconProps

/**
 * `Network` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Network = forwardRef<NetworkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NetworkIcon} {...props} />
))
