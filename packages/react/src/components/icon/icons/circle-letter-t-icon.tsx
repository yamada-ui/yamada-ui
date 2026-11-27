"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterT as OriginalCircleLetterTIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterTIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterTIcon = component(Icon)({
  as: OriginalCircleLetterTIcon,
}) as Component<"svg", IconProps>
