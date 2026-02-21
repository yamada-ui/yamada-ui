"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Underline as OriginalUnderlineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UnderlineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UnderlineIcon = component(Icon)({
  as: OriginalUnderlineIcon,
}) as Component<"svg", IconProps>
