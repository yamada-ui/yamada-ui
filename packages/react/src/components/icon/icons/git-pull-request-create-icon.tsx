"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestCreate as OriginalGitPullRequestCreateIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitPullRequestCreateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitPullRequestCreateIcon = component(Icon)({
  as: OriginalGitPullRequestCreateIcon,
}) as Component<"svg", IconProps>
