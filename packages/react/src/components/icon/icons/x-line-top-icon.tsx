"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { XLineTop as OriginalXLineTopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `XLineTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const XLineTopIcon = component(Icon)({
  as: OriginalXLineTopIcon,
}) as Component<"svg", IconProps>
