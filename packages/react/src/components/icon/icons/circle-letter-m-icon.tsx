"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterM as OriginalCircleLetterMIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterMIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterMIcon = component(Icon)({
  as: OriginalCircleLetterMIcon,
}) as Component<"svg", IconProps>
