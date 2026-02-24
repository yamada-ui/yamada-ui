"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CarFront as OriginalCarFrontIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CarFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CarFrontIcon = component(Icon)({
  as: OriginalCarFrontIcon,
}) as Component<"svg", IconProps>
