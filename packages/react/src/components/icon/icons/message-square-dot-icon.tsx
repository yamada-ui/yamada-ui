"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareDot as OriginalMessageSquareDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareDotIcon = component(Icon)({
  as: OriginalMessageSquareDotIcon,
}) as Component<"svg", IconProps>
