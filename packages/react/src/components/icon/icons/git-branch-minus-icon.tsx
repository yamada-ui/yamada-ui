"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitBranchMinus as OriginalGitBranchMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitBranchMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitBranchMinusIcon = component(Icon)({
  as: OriginalGitBranchMinusIcon,
}) as Component<"svg", IconProps>
