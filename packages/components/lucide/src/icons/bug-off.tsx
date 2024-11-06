import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BugOff as LucideBugOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BugOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBugOffIcon} {...props} />
))

/**
 * @deprecated Use `BugOffIcon` instead.
 */
export const BugOff = BugOffIcon
