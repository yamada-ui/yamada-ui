"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Scale as OriginalScaleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScaleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScaleIcon = component(Icon)({
  as: OriginalScaleIcon,
}) as Component<"svg", IconProps>
