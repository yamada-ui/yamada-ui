"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequest as OriginalGitPullRequestIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitPullRequestIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitPullRequestIcon = component(Icon)({
  as: OriginalGitPullRequestIcon,
}) as Component<"svg", IconProps>
