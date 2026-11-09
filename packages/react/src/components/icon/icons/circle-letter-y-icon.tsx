"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterY as OriginalCircleLetterYIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterYIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterYIcon = component(Icon)({
  as: OriginalCircleLetterYIcon,
}) as Component<"svg", IconProps>
