"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterZ as OriginalCircleLetterZIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterZIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterZIcon = component(Icon)({
  as: OriginalCircleLetterZIcon,
}) as Component<"svg", IconProps>
