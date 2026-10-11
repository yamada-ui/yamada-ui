"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Printer3d as OriginalPrinter3dIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Printer3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Printer3dIcon = component(Icon)({
  as: OriginalPrinter3dIcon,
}) as Component<"svg", IconProps>
