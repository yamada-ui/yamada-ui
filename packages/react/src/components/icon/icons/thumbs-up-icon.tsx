"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ThumbsUp as OriginalThumbsUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ThumbsUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ThumbsUpIcon = component(Icon)({
  as: OriginalThumbsUpIcon,
}) as Component<"svg", IconProps>
