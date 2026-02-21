"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleHeart as OriginalMessageCircleHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleHeartIcon = component(Icon)({
  as: OriginalMessageCircleHeartIcon,
}) as Component<"svg", IconProps>
