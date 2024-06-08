import { forwardRef } from "@yamada-ui/core"
import { RefreshCw as RefreshCwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RefreshCwProps = LucideIconProps

/**
 * `RefreshCw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCw = forwardRef<RefreshCwProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RefreshCwIcon} {...props} />
))
