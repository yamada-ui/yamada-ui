"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleOff as OriginalMessageCircleOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleOffIcon = component(Icon)({
  as: OriginalMessageCircleOffIcon,
}) as Component<"svg", IconProps>
