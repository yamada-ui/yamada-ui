import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { X as LucideXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `XIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const XIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideXIcon} {...props} />
))

/**
 * @deprecated Use `XIcon` instead.
 */
export const X = XIcon
