"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Turtle as OriginalTurtleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TurtleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TurtleIcon = component(Icon)({
  as: OriginalTurtleIcon,
}) as Component<"svg", IconProps>
