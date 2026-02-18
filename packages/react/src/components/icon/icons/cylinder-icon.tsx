"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cylinder as OriginalCylinderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CylinderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CylinderIcon = component(Icon)({
  as: OriginalCylinderIcon,
}) as Component<"svg", IconProps>
