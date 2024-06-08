import { forwardRef } from "@yamada-ui/core"
import { GitGraph as GitGraphIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitGraphProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitGraph = forwardRef<GitGraphProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GitGraphIcon} {...props} />
))
