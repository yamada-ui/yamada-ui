import { forwardRef } from "@yamada-ui/core"
import { GitFork as GitForkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitForkProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitFork = forwardRef<GitForkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GitForkIcon} {...props} />
))
