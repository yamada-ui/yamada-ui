"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareExclamationPoint as OriginalMessageSquareExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareExclamationPointIcon = component(Icon)({
  as: OriginalMessageSquareExclamationPointIcon,
}) as Component<"svg", IconProps>
