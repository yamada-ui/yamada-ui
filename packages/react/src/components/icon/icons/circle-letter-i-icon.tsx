"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterI as OriginalCircleLetterIIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterIIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterIIcon = component(Icon)({
  as: OriginalCircleLetterIIcon,
}) as Component<"svg", IconProps>
