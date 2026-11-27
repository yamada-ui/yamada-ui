"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleExclamationPoint as OriginalMessageCircleExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleExclamationPointIcon = component(Icon)({
  as: OriginalMessageCircleExclamationPointIcon,
}) as Component<"svg", IconProps>
