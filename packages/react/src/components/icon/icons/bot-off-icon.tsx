"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BotOff as OriginalBotOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BotOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BotOffIcon = component(Icon)({
  as: OriginalBotOffIcon,
}) as Component<"svg", IconProps>
