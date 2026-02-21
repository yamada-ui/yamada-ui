"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Minus as OriginalMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MinusIcon = component(Icon)({
  as: OriginalMinusIcon,
}) as Component<"svg", IconProps>
