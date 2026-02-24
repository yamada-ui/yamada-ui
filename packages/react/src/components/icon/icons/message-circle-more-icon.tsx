"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleMore as OriginalMessageCircleMoreIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleMoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleMoreIcon = component(Icon)({
  as: OriginalMessageCircleMoreIcon,
}) as Component<"svg", IconProps>
