"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowLeftExit as OriginalSquareArrowLeftExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowLeftExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowLeftExitIcon = component(Icon)({
  as: OriginalSquareArrowLeftExitIcon,
}) as Component<"svg", IconProps>
