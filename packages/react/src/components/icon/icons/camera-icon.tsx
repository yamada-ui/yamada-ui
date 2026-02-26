"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Camera as OriginalCameraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CameraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CameraIcon = component(Icon)({
  as: OriginalCameraIcon,
}) as Component<"svg", IconProps>
