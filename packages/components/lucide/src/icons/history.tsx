import { forwardRef } from "@yamada-ui/core"
import { History as HistoryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HistoryProps = LucideIconProps

/**
 * `History` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const History = forwardRef<HistoryProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HistoryIcon} {...props} />
))
