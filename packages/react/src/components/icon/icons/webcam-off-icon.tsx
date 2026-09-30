"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WebcamOff as OriginalWebcamOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WebcamOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WebcamOffIcon = component(Icon)({
  as: OriginalWebcamOffIcon,
}) as Component<"svg", IconProps>
