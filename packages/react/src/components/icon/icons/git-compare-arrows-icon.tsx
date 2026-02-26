"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitCompareArrows as OriginalGitCompareArrowsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitCompareArrowsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitCompareArrowsIcon = component(Icon)({
  as: OriginalGitCompareArrowsIcon,
}) as Component<"svg", IconProps>
