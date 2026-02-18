"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ThermometerSnowflake as OriginalThermometerSnowflakeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ThermometerSnowflakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ThermometerSnowflakeIcon = component(Icon)({
  as: OriginalThermometerSnowflakeIcon,
}) as Component<"svg", IconProps>
