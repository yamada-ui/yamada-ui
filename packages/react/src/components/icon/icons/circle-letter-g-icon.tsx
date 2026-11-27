"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterG as OriginalCircleLetterGIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterGIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterGIcon = component(Icon)({
  as: OriginalCircleLetterGIcon,
}) as Component<"svg", IconProps>
