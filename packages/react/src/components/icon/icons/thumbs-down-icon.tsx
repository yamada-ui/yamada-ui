"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ThumbsDown as OriginalThumbsDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ThumbsDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ThumbsDownIcon = component(Icon)({
  as: OriginalThumbsDownIcon,
}) as Component<"svg", IconProps>
