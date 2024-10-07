import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Handshake as HandshakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Handshake` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Handshake = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandshakeIcon} {...props} />
))
