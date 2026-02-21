"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CameraOff as OriginalCameraOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CameraOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CameraOffIcon = component(Icon)({
  as: OriginalCameraOffIcon,
}) as Component<"svg", IconProps>
