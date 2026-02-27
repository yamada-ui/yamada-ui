"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SunSnow as OriginalSunSnowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SunSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SunSnowIcon = component(Icon)({
  as: OriginalSunSnowIcon,
}) as Component<"svg", IconProps>
