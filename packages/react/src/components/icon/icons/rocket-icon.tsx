"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rocket as OriginalRocketIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RocketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RocketIcon = component(Icon)({
  as: OriginalRocketIcon,
}) as Component<"svg", IconProps>
