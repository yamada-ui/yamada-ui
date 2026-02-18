"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareShare as OriginalMessageSquareShareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareShareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareShareIcon = component(Icon)({
  as: OriginalMessageSquareShareIcon,
}) as Component<"svg", IconProps>
