"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Highlighter as OriginalHighlighterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HighlighterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HighlighterIcon = component(Icon)({
  as: OriginalHighlighterIcon,
}) as Component<"svg", IconProps>
