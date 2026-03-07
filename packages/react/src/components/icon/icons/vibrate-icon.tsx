"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Vibrate as OriginalVibrateIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VibrateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VibrateIcon = component(Icon)({
  as: OriginalVibrateIcon,
}) as Component<"svg", IconProps>
