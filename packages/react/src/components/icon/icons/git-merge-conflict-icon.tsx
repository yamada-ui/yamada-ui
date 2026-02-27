"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitMergeConflict as OriginalGitMergeConflictIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitMergeConflictIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitMergeConflictIcon = component(Icon)({
  as: OriginalGitMergeConflictIcon,
}) as Component<"svg", IconProps>
