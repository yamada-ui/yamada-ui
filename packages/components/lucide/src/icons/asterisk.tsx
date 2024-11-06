import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Asterisk as LucideAsteriskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AsteriskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AsteriskIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAsteriskIcon} {...props} />
))

/**
 * @deprecated Use `AsteriskIcon` instead.
 */
export const Asterisk = AsteriskIcon
