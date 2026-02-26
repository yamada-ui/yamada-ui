"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareArrowOutUpLeft as OriginalSquareArrowOutUpLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareArrowOutUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareArrowOutUpLeftIcon = component(Icon)({
  as: OriginalSquareArrowOutUpLeftIcon,
}) as Component<"svg", IconProps>
