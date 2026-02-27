"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveUpLeft as OriginalMoveUpLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveUpLeftIcon = component(Icon)({
  as: OriginalMoveUpLeftIcon,
}) as Component<"svg", IconProps>
