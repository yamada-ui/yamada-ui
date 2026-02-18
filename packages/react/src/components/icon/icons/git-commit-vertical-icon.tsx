"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitCommitVertical as OriginalGitCommitVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitCommitVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitCommitVerticalIcon = component(Icon)({
  as: OriginalGitCommitVerticalIcon,
}) as Component<"svg", IconProps>
