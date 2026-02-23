"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestArrow as OriginalGitPullRequestArrowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitPullRequestArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitPullRequestArrowIcon = component(Icon)({
  as: OriginalGitPullRequestArrowIcon,
}) as Component<"svg", IconProps>
