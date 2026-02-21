"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Thermometer as OriginalThermometerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ThermometerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ThermometerIcon = component(Icon)({
  as: OriginalThermometerIcon,
}) as Component<"svg", IconProps>
