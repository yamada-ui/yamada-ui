"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquare as OriginalMessageSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareIcon = component(Icon)({
  as: OriginalMessageSquareIcon,
}) as Component<"svg", IconProps>
