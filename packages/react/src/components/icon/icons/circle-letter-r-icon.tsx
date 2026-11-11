"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterR as OriginalCircleLetterRIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterRIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterRIcon = component(Icon)({
  as: OriginalCircleLetterRIcon,
}) as Component<"svg", IconProps>
