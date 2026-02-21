"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Quote as OriginalQuoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `QuoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const QuoteIcon = component(Icon)({
  as: OriginalQuoteIcon,
}) as Component<"svg", IconProps>
