"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterP as OriginalCircleLetterPIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterPIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterPIcon = component(Icon)({
  as: OriginalCircleLetterPIcon,
}) as Component<"svg", IconProps>
