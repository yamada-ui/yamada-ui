"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterV as OriginalCircleLetterVIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterVIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterVIcon = component(Icon)({
  as: OriginalCircleLetterVIcon,
}) as Component<"svg", IconProps>
