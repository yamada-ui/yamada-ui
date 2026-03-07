"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleCheck as OriginalMessageCircleCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleCheckIcon = component(Icon)({
  as: OriginalMessageCircleCheckIcon,
}) as Component<"svg", IconProps>
