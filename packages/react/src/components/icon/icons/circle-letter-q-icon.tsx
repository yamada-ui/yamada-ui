"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterQ as OriginalCircleLetterQIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterQIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterQIcon = component(Icon)({
  as: OriginalCircleLetterQIcon,
}) as Component<"svg", IconProps>
