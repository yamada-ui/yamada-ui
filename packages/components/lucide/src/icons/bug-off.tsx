import { forwardRef } from "@yamada-ui/core"
import { BugOff as BugOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BugOffProps = LucideIconProps

/**
 * `BugOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugOff = forwardRef<BugOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BugOffIcon} {...props} />
))
