"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MarsStroke as OriginalMarsStrokeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MarsStrokeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MarsStrokeIcon = component(Icon)({
  as: OriginalMarsStrokeIcon,
}) as Component<"svg", IconProps>
