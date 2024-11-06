import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hash as LucideHashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HashIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHashIcon} {...props} />
))

/**
 * @deprecated Use `HashIcon` instead.
 */
export const Hash = HashIcon
