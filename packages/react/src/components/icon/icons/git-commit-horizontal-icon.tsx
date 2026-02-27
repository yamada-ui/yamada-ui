"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitCommitHorizontal as OriginalGitCommitHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitCommitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitCommitHorizontalIcon = component(Icon)({
  as: OriginalGitCommitHorizontalIcon,
}) as Component<"svg", IconProps>
