import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HdmiPort as LucideHdmiPortIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HdmiPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HdmiPortIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHdmiPortIcon} {...props} />
))

/**
 * @deprecated Use `HdmiPortIcon` instead.
 */
export const HdmiPort = HdmiPortIcon
