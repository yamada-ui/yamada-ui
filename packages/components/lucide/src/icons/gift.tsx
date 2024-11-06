import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gift as LucideGiftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GiftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GiftIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGiftIcon} {...props} />
))

/**
 * @deprecated Use `GiftIcon` instead.
 */
export const Gift = GiftIcon
