"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterK as OriginalCircleLetterKIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterKIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterKIcon = component(Icon)({
  as: OriginalCircleLetterKIcon,
}) as Component<"svg", IconProps>
