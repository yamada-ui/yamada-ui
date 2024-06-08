import { forwardRef } from "@yamada-ui/core"
import { Asterisk as AsteriskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AsteriskProps = LucideIconProps

/**
 * `Asterisk` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Asterisk = forwardRef<AsteriskProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AsteriskIcon} {...props} />
))
