"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitBranch as OriginalGitBranchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitBranchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitBranchIcon = component(Icon)({
  as: OriginalGitBranchIcon,
}) as Component<"svg", IconProps>
