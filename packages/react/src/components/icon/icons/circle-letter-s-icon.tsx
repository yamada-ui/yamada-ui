"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleLetterS as OriginalCircleLetterSIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleLetterSIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleLetterSIcon = component(Icon)({
  as: OriginalCircleLetterSIcon,
}) as Component<"svg", IconProps>
