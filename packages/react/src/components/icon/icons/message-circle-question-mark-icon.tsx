"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageCircleQuestionMark as OriginalMessageCircleQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageCircleQuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageCircleQuestionMarkIcon = component(Icon)({
  as: OriginalMessageCircleQuestionMarkIcon,
}) as Component<"svg", IconProps>
