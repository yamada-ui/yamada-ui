import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Anchor as LucideAnchorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AnchorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AnchorIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAnchorIcon} {...props} />
))

/**
 * @deprecated Use `AnchorIcon` instead.
 */
export const Anchor = AnchorIcon
