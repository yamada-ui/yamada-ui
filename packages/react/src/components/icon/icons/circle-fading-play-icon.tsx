"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleFadingPlay as OriginalCircleFadingPlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleFadingPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleFadingPlayIcon = component(Icon)({
  as: OriginalCircleFadingPlayIcon,
}) as Component<"svg", IconProps>
