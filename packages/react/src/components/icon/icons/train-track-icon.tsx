"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrainTrack as OriginalTrainTrackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrainTrackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrainTrackIcon = component(Icon)({
  as: OriginalTrainTrackIcon,
}) as Component<"svg", IconProps>
