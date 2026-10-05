"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessagesCircle as OriginalMessagesCircleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessagesCircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessagesCircleIcon = component(Icon)({
  as: OriginalMessagesCircleIcon,
}) as Component<"svg", IconProps>
