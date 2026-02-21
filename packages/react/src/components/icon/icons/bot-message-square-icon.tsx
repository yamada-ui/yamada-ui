"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BotMessageSquare as OriginalBotMessageSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BotMessageSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BotMessageSquareIcon = component(Icon)({
  as: OriginalBotMessageSquareIcon,
}) as Component<"svg", IconProps>
