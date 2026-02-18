"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareDashed as OriginalMessageSquareDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareDashedIcon = component(Icon)({
  as: OriginalMessageSquareDashedIcon,
}) as Component<"svg", IconProps>
