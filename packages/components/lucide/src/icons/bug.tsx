import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bug as LucideBugIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBugIcon} {...props} />
))

/**
 * @deprecated Use `BugIcon` instead.
 */
export const Bug = BugIcon
