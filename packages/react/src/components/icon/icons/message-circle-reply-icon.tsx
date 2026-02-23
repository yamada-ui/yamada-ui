"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleReply as OriginalMessageCircleReplyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleReplyIcon = component(Icon)({
  as: OriginalMessageCircleReplyIcon,
}) as Component<"svg", IconProps>
