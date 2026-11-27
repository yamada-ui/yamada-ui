"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterX as OriginalCircleLetterXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterXIcon = component(Icon)({
  as: OriginalCircleLetterXIcon,
}) as Component<"svg", IconProps>
