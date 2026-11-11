"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterC as OriginalCircleLetterCIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterCIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterCIcon = component(Icon)({
  as: OriginalCircleLetterCIcon,
}) as Component<"svg", IconProps>
