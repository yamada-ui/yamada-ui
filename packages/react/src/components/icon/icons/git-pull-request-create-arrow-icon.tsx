"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestCreateArrow as OriginalGitPullRequestCreateArrowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitPullRequestCreateArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitPullRequestCreateArrowIcon = component(Icon)({
  as: OriginalGitPullRequestCreateArrowIcon,
}) as Component<"svg", IconProps>
