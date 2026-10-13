"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArmenianDram as OriginalArmenianDramIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArmenianDramIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArmenianDramIcon = component(Icon)({
  as: OriginalArmenianDramIcon,
}) as Component<"svg", IconProps>
