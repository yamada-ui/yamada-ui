"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Compass as OriginalCompassIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CompassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CompassIcon = component(Icon)({
  as: OriginalCompassIcon,
}) as Component<"svg", IconProps>
