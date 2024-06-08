import { forwardRef } from "@yamada-ui/core"
import { BugPlay as BugPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BugPlayProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BugPlay = forwardRef<BugPlayProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BugPlayIcon} {...props} />
))
