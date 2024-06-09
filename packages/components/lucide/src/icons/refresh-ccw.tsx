import { forwardRef } from "@yamada-ui/core"
import { RefreshCcw as RefreshCcwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RefreshCcwProps = LucideIconProps

/**
 * `RefreshCcw` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCcw = forwardRef<RefreshCcwProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RefreshCcwIcon} {...props} />
))
