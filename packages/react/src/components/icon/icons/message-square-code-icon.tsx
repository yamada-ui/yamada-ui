"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareCode as OriginalMessageSquareCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareCodeIcon = component(Icon)({
  as: OriginalMessageSquareCodeIcon,
}) as Component<"svg", IconProps>
