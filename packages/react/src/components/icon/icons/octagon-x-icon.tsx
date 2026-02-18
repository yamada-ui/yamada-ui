"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonX as OriginalOctagonXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OctagonXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OctagonXIcon = component(Icon)({
  as: OriginalOctagonXIcon,
}) as Component<"svg", IconProps>
