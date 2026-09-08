"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleDashedCheck as OriginalMessageCircleDashedCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleDashedCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleDashedCheckIcon = component(Icon)({
  as: OriginalMessageCircleDashedCheckIcon,
}) as Component<"svg", IconProps>
