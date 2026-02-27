"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Circle as OriginalCircleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleIcon = component(Icon)({
  as: OriginalCircleIcon,
}) as Component<"svg", IconProps>
