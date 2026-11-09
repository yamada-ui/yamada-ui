"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterO as OriginalCircleLetterOIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterOIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterOIcon = component(Icon)({
  as: OriginalCircleLetterOIcon,
}) as Component<"svg", IconProps>
