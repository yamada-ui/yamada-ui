"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Gitlab as OriginalGitlabIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitlabIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitlabIcon = component(Icon)({
  as: OriginalGitlabIcon,
}) as Component<"svg", IconProps>
