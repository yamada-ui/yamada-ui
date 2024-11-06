import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Smile as LucideSmileIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SmileIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmileIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSmileIcon} {...props} />
))

/**
 * @deprecated Use `SmileIcon` instead.
 */
export const Smile = SmileIcon
