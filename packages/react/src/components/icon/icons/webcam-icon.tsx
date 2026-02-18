"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Webcam as OriginalWebcamIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WebcamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WebcamIcon = component(Icon)({
  as: OriginalWebcamIcon,
}) as Component<"svg", IconProps>
