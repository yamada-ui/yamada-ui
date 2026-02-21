"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePause as OriginalSquarePauseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePauseIcon = component(Icon)({
  as: OriginalSquarePauseIcon,
}) as Component<"svg", IconProps>
