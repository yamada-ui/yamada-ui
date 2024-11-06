import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gitlab as LucideGitlabIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GitlabIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitlabIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGitlabIcon} {...props} />
))

/**
 * @deprecated Use `GitlabIcon` instead.
 */
export const Gitlab = GitlabIcon
