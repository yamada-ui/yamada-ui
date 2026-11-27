"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterW as OriginalCircleLetterWIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterWIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterWIcon = component(Icon)({
  as: OriginalCircleLetterWIcon,
}) as Component<"svg", IconProps>
