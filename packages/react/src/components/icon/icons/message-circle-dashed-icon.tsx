"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleDashed as OriginalMessageCircleDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleDashedIcon = component(Icon)({
  as: OriginalMessageCircleDashedIcon,
}) as Component<"svg", IconProps>
