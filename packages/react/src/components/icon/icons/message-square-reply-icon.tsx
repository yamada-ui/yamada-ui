"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareReply as OriginalMessageSquareReplyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareReplyIcon = component(Icon)({
  as: OriginalMessageSquareReplyIcon,
}) as Component<"svg", IconProps>
