"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterF as OriginalCircleLetterFIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterFIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterFIcon = component(Icon)({
  as: OriginalCircleLetterFIcon,
}) as Component<"svg", IconProps>
