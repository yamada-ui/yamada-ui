"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveLeft as OriginalMoveLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveLeftIcon = component(Icon)({
  as: OriginalMoveLeftIcon,
}) as Component<"svg", IconProps>
