"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleCheckBig as OriginalCircleCheckBigIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleCheckBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleCheckBigIcon = component(Icon)({
  as: OriginalCircleCheckBigIcon,
}) as Component<"svg", IconProps>
