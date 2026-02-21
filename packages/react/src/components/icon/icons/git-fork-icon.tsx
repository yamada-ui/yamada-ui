"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitFork as OriginalGitForkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitForkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitForkIcon = component(Icon)({
  as: OriginalGitForkIcon,
}) as Component<"svg", IconProps>
