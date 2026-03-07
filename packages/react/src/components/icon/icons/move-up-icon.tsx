"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveUp as OriginalMoveUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveUpIcon = component(Icon)({
  as: OriginalMoveUpIcon,
}) as Component<"svg", IconProps>
