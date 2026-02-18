"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareX as OriginalMessageSquareXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareXIcon = component(Icon)({
  as: OriginalMessageSquareXIcon,
}) as Component<"svg", IconProps>
