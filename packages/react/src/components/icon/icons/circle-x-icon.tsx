"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleX as OriginalCircleXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleXIcon = component(Icon)({
  as: OriginalCircleXIcon,
}) as Component<"svg", IconProps>
