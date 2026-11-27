"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterE as OriginalCircleLetterEIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterEIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterEIcon = component(Icon)({
  as: OriginalCircleLetterEIcon,
}) as Component<"svg", IconProps>
