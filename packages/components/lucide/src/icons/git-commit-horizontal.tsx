import { forwardRef } from "@yamada-ui/core"
import { GitCommitHorizontal as GitCommitHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitCommitHorizontalProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitHorizontal = forwardRef<GitCommitHorizontalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GitCommitHorizontalIcon} {...props} />
  ),
)
