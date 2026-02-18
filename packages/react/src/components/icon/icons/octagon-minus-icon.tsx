"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonMinus as OriginalOctagonMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OctagonMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OctagonMinusIcon = component(Icon)({
  as: OriginalOctagonMinusIcon,
}) as Component<"svg", IconProps>
