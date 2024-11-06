import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Split as LucideSplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SplitIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSplitIcon} {...props} />
))

/**
 * @deprecated Use `SplitIcon` instead.
 */
export const Split = SplitIcon
