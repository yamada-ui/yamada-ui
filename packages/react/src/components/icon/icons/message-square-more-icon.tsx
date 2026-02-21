"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareMore as OriginalMessageSquareMoreIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareMoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareMoreIcon = component(Icon)({
  as: OriginalMessageSquareMoreIcon,
}) as Component<"svg", IconProps>
