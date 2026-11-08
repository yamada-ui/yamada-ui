"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterPOff as OriginalCircleLetterPOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterPOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterPOffIcon = component(Icon)({
  as: OriginalCircleLetterPOffIcon,
}) as Component<"svg", IconProps>
