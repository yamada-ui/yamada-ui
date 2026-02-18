"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Magnet as OriginalMagnetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MagnetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MagnetIcon = component(Icon)({
  as: OriginalMagnetIcon,
}) as Component<"svg", IconProps>
