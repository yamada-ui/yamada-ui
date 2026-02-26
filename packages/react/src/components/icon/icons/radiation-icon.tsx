"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Radiation as OriginalRadiationIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RadiationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RadiationIcon = component(Icon)({
  as: OriginalRadiationIcon,
}) as Component<"svg", IconProps>
