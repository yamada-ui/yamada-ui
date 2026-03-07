"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tangent as OriginalTangentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TangentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TangentIcon = component(Icon)({
  as: OriginalTangentIcon,
}) as Component<"svg", IconProps>
