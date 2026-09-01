"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareText as OriginalSquareTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareTextIcon = component(Icon)({
  as: OriginalSquareTextIcon,
}) as Component<"svg", IconProps>
