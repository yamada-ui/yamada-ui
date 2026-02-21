"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareActivity as OriginalSquareActivityIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareActivityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareActivityIcon = component(Icon)({
  as: OriginalSquareActivityIcon,
}) as Component<"svg", IconProps>
