"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heater as OriginalHeaterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeaterIcon = component(Icon)({
  as: OriginalHeaterIcon,
}) as Component<"svg", IconProps>
