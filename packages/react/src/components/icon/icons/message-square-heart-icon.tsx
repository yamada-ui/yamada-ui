"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareHeart as OriginalMessageSquareHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareHeartIcon = component(Icon)({
  as: OriginalMessageSquareHeartIcon,
}) as Component<"svg", IconProps>
