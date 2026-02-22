"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareWarning as OriginalMessageSquareWarningIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareWarningIcon = component(Icon)({
  as: OriginalMessageSquareWarningIcon,
}) as Component<"svg", IconProps>
