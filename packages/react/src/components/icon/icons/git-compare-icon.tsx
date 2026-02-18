"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GitCompare as OriginalGitCompareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GitCompareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GitCompareIcon = component(Icon)({
  as: OriginalGitCompareIcon,
}) as Component<"svg", IconProps>
