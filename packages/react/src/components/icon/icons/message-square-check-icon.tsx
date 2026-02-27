"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareCheck as OriginalMessageSquareCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareCheckIcon = component(Icon)({
  as: OriginalMessageSquareCheckIcon,
}) as Component<"svg", IconProps>
