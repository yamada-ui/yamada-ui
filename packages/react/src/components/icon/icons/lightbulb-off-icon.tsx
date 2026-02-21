"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LightbulbOff as OriginalLightbulbOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LightbulbOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LightbulbOffIcon = component(Icon)({
  as: OriginalLightbulbOffIcon,
}) as Component<"svg", IconProps>
