import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Award as LucideAwardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AwardIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAwardIcon} {...props} />
))

/**
 * @deprecated Use `AwardIcon` instead.
 */
export const Award = AwardIcon
