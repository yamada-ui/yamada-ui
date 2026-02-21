"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDownLeft as OriginalMoveDownLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveDownLeftIcon = component(Icon)({
  as: OriginalMoveDownLeftIcon,
}) as Component<"svg", IconProps>
