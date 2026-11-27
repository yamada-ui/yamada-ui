"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterU as OriginalCircleLetterUIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterUIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterUIcon = component(Icon)({
  as: OriginalCircleLetterUIcon,
}) as Component<"svg", IconProps>
