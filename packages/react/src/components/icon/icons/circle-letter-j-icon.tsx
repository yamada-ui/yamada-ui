"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterJ as OriginalCircleLetterJIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterJIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterJIcon = component(Icon)({
  as: OriginalCircleLetterJIcon,
}) as Component<"svg", IconProps>
