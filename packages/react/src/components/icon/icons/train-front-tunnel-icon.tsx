"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrainFrontTunnel as OriginalTrainFrontTunnelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrainFrontTunnelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrainFrontTunnelIcon = component(Icon)({
  as: OriginalTrainFrontTunnelIcon,
}) as Component<"svg", IconProps>
