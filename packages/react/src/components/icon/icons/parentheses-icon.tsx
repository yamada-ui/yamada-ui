"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Parentheses as OriginalParenthesesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ParenthesesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ParenthesesIcon = component(Icon)({
  as: OriginalParenthesesIcon,
}) as Component<"svg", IconProps>
