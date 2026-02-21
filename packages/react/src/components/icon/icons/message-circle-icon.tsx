"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircle as OriginalMessageCircleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleIcon = component(Icon)({
  as: OriginalMessageCircleIcon,
}) as Component<"svg", IconProps>
