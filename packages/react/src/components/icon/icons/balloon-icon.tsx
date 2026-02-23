"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Balloon as OriginalBalloonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BalloonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BalloonIcon = component(Icon)({
  as: OriginalBalloonIcon,
}) as Component<"svg", IconProps>
