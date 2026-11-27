"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterH as OriginalCircleLetterHIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterHIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterHIcon = component(Icon)({
  as: OriginalCircleLetterHIcon,
}) as Component<"svg", IconProps>
