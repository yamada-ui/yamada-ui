import { forwardRef } from "@yamada-ui/core"
import { GitPullRequestDraft as GitPullRequestDraftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GitPullRequestDraftProps = LucideIconProps

/**
 * `GitPullRequestDraft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestDraft = forwardRef<GitPullRequestDraftProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={GitPullRequestDraftIcon} {...props} />
  ),
)
