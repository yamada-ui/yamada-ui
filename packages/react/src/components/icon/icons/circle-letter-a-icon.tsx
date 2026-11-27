"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterA as OriginalCircleLetterAIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterAIcon = component(Icon)({
  as: OriginalCircleLetterAIcon,
}) as Component<"svg", IconProps>
