"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitGraph as OriginalGitGraphIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitGraphIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitGraphIcon = component(Icon)({
  as: OriginalGitGraphIcon,
}) as Component<"svg", IconProps>
