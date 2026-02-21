"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Plane as OriginalPlaneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlaneIcon = component(Icon)({
  as: OriginalPlaneIcon,
}) as Component<"svg", IconProps>
