import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Minimize as LucideMinimizeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MinimizeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MinimizeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMinimizeIcon} {...props} />
))

/**
 * @deprecated Use `MinimizeIcon` instead.
 */
export const Minimize = MinimizeIcon
