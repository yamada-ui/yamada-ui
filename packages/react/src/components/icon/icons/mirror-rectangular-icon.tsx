"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MirrorRectangular as OriginalMirrorRectangularIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MirrorRectangularIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MirrorRectangularIcon = component(Icon)({
  as: OriginalMirrorRectangularIcon,
}) as Component<"svg", IconProps>
