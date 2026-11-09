"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterD as OriginalCircleLetterDIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterDIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterDIcon = component(Icon)({
  as: OriginalCircleLetterDIcon,
}) as Component<"svg", IconProps>
