"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveHorizontal as OriginalMoveHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveHorizontalIcon = component(Icon)({
  as: OriginalMoveHorizontalIcon,
}) as Component<"svg", IconProps>
