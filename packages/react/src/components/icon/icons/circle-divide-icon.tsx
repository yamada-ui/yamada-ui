"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDivide as OriginalCircleDivideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleDivideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleDivideIcon = component(Icon)({
  as: OriginalCircleDivideIcon,
}) as Component<"svg", IconProps>
