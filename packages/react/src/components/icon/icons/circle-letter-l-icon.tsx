"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterL as OriginalCircleLetterLIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterLIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterLIcon = component(Icon)({
  as: OriginalCircleLetterLIcon,
}) as Component<"svg", IconProps>
