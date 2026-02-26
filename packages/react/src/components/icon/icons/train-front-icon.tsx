"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrainFront as OriginalTrainFrontIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrainFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrainFrontIcon = component(Icon)({
  as: OriginalTrainFrontIcon,
}) as Component<"svg", IconProps>
