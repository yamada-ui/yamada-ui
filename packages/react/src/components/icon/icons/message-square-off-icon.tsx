"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareOff as OriginalMessageSquareOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareOffIcon = component(Icon)({
  as: OriginalMessageSquareOffIcon,
}) as Component<"svg", IconProps>
