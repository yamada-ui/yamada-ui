"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Angle as OriginalAngleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AngleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AngleIcon = component(Icon)({
  as: OriginalAngleIcon,
}) as Component<"svg", IconProps>
