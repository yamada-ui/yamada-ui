"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowUpLeftExit as OriginalSquareArrowUpLeftExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowUpLeftExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowUpLeftExitIcon = component(Icon)({
  as: OriginalSquareArrowUpLeftExitIcon,
}) as Component<"svg", IconProps>
