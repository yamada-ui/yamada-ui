import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BellRing as LucideBellRingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BellRingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellRingIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBellRingIcon} {...props} />
))

/**
 * @deprecated Use `BellRingIcon` instead.
 */
export const BellRing = BellRingIcon
