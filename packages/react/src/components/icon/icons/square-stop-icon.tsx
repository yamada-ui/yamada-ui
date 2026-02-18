"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareStop as OriginalSquareStopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareStopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareStopIcon = component(Icon)({
  as: OriginalSquareStopIcon,
}) as Component<"svg", IconProps>
