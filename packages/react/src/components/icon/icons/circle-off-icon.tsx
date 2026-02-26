"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleOff as OriginalCircleOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleOffIcon = component(Icon)({
  as: OriginalCircleOffIcon,
}) as Component<"svg", IconProps>
