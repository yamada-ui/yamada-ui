"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VibrateOff as OriginalVibrateOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VibrateOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VibrateOffIcon = component(Icon)({
  as: OriginalVibrateOffIcon,
}) as Component<"svg", IconProps>
