"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MouseOff as OriginalMouseOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MouseOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MouseOffIcon = component(Icon)({
  as: OriginalMouseOffIcon,
}) as Component<"svg", IconProps>
