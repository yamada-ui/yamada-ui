"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Reply as OriginalReplyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReplyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReplyIcon = component(Icon)({
  as: OriginalReplyIcon,
}) as Component<"svg", IconProps>
