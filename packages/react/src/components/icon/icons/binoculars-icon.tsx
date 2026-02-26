"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Binoculars as OriginalBinocularsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BinocularsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BinocularsIcon = component(Icon)({
  as: OriginalBinocularsIcon,
}) as Component<"svg", IconProps>
