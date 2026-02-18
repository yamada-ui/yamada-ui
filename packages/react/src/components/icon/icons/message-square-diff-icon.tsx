"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareDiff as OriginalMessageSquareDiffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareDiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareDiffIcon = component(Icon)({
  as: OriginalMessageSquareDiffIcon,
}) as Component<"svg", IconProps>
