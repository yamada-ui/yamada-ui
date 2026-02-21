"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Move as OriginalMoveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveIcon = component(Icon)({ as: OriginalMoveIcon }) as Component<
  "svg",
  IconProps
>
