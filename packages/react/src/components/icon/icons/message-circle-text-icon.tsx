"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleText as OriginalMessageCircleTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleTextIcon = component(Icon)({
  as: OriginalMessageCircleTextIcon,
}) as Component<"svg", IconProps>
