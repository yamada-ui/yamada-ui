"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleWarning as OriginalMessageCircleWarningIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleWarningIcon = component(Icon)({
  as: OriginalMessageCircleWarningIcon,
}) as Component<"svg", IconProps>
