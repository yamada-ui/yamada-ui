"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveRight as OriginalMoveRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveRightIcon = component(Icon)({
  as: OriginalMoveRightIcon,
}) as Component<"svg", IconProps>
