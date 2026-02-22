"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestClosed as OriginalGitPullRequestClosedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitPullRequestClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitPullRequestClosedIcon = component(Icon)({
  as: OriginalGitPullRequestClosedIcon,
}) as Component<"svg", IconProps>
