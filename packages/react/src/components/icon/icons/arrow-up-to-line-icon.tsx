"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpToLine as OriginalArrowUpToLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpToLineIcon = component(Icon)({
  as: OriginalArrowUpToLineIcon,
}) as Component<"svg", IconProps>
