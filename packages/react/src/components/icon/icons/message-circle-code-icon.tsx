"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleCode as OriginalMessageCircleCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleCodeIcon = component(Icon)({
  as: OriginalMessageCircleCodeIcon,
}) as Component<"svg", IconProps>
