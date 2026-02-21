"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleX as OriginalMessageCircleXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleXIcon = component(Icon)({
  as: OriginalMessageCircleXIcon,
}) as Component<"svg", IconProps>
