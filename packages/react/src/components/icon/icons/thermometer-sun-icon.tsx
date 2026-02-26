"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ThermometerSun as OriginalThermometerSunIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ThermometerSunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ThermometerSunIcon = component(Icon)({
  as: OriginalThermometerSunIcon,
}) as Component<"svg", IconProps>
