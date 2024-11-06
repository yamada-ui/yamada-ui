import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { History as LucideHistoryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HistoryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HistoryIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHistoryIcon} {...props} />
))

/**
 * @deprecated Use `HistoryIcon` instead.
 */
export const History = HistoryIcon
