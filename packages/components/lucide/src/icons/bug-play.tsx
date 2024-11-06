import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BugPlay as LucideBugPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BugPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugPlayIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBugPlayIcon} {...props} />
))

/**
 * @deprecated Use `BugPlayIcon` instead.
 */
export const BugPlay = BugPlayIcon
