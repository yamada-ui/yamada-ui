"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Fuel as OriginalFuelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FuelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FuelIcon = component(Icon)({ as: OriginalFuelIcon }) as Component<
  "svg",
  IconProps
>
