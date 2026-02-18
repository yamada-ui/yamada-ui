"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextQuote as OriginalTextQuoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextQuoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextQuoteIcon = component(Icon)({
  as: OriginalTextQuoteIcon,
}) as Component<"svg", IconProps>
