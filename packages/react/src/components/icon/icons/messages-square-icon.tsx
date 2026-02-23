"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessagesSquare as OriginalMessagesSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessagesSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessagesSquareIcon = component(Icon)({
  as: OriginalMessagesSquareIcon,
}) as Component<"svg", IconProps>
