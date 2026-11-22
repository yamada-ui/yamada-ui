"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterB as OriginalCircleLetterBIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterBIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterBIcon = component(Icon)({
  as: OriginalCircleLetterBIcon,
}) as Component<"svg", IconProps>
