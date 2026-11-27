"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BallWave as OriginalBallWaveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BallWaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BallWaveIcon = component(Icon)({
  as: OriginalBallWaveIcon,
}) as Component<"svg", IconProps>
