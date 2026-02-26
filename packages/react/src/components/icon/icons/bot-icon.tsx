"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bot as OriginalBotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BotIcon = component(Icon)({ as: OriginalBotIcon }) as Component<
  "svg",
  IconProps
>
