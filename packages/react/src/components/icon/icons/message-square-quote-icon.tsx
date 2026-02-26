"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MessageSquareQuote as OriginalMessageSquareQuoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MessageSquareQuoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MessageSquareQuoteIcon = component(Icon)({
  as: OriginalMessageSquareQuoteIcon,
}) as Component<"svg", IconProps>
