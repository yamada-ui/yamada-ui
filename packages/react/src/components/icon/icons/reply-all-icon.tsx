"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReplyAll as OriginalReplyAllIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReplyAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReplyAllIcon = component(Icon)({
  as: OriginalReplyAllIcon,
}) as Component<"svg", IconProps>
