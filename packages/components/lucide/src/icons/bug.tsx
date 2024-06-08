import { forwardRef } from "@yamada-ui/core"
import { Bug as BugIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BugProps = LucideIconProps

/**
 * `Bug` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bug = forwardRef<BugProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BugIcon} {...props} />
))
