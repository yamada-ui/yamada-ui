import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Handshake as LucideHandshakeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandshakeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideHandshakeIcon} {...props} />,
)

/**
 * @deprecated Use `HandshakeIcon` instead.
 */
export const Handshake = HandshakeIcon
