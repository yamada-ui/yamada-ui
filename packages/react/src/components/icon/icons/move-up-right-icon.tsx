"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveUpRight as OriginalMoveUpRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveUpRightIcon = component(Icon)({
  as: OriginalMoveUpRightIcon,
}) as Component<"svg", IconProps>
