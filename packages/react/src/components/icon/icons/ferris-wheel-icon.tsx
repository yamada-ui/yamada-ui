"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FerrisWheel as OriginalFerrisWheelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FerrisWheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FerrisWheelIcon = component(Icon)({
  as: OriginalFerrisWheelIcon,
}) as Component<"svg", IconProps>
