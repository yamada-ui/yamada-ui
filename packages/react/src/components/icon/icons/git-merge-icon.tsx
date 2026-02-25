"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitMerge as OriginalGitMergeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitMergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitMergeIcon = component(Icon)({
  as: OriginalGitMergeIcon,
}) as Component<"svg", IconProps>
