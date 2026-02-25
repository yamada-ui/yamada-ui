"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitBranchPlus as OriginalGitBranchPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitBranchPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitBranchPlusIcon = component(Icon)({
  as: OriginalGitBranchPlusIcon,
}) as Component<"svg", IconProps>
