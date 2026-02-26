"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDownRight as OriginalMoveDownRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveDownRightIcon = component(Icon)({
  as: OriginalMoveDownRightIcon,
}) as Component<"svg", IconProps>
