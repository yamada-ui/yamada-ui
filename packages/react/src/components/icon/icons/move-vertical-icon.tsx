"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveVertical as OriginalMoveVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveVerticalIcon = component(Icon)({
  as: OriginalMoveVerticalIcon,
}) as Component<"svg", IconProps>
