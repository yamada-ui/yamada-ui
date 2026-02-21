"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SwitchCamera as OriginalSwitchCameraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SwitchCameraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SwitchCameraIcon = component(Icon)({
  as: OriginalSwitchCameraIcon,
}) as Component<"svg", IconProps>
