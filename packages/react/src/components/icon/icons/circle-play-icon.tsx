"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePlay as OriginalCirclePlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CirclePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CirclePlayIcon = component(Icon)({
  as: OriginalCirclePlayIcon,
}) as Component<"svg", IconProps>
