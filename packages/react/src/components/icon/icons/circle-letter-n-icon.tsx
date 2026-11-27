"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterN as OriginalCircleLetterNIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterNIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterNIcon = component(Icon)({
  as: OriginalCircleLetterNIcon,
}) as Component<"svg", IconProps>
