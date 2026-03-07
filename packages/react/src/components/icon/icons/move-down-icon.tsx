"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDown as OriginalMoveDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveDownIcon = component(Icon)({
  as: OriginalMoveDownIcon,
}) as Component<"svg", IconProps>
