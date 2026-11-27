"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleFadingCheck as OriginalCircleFadingCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleFadingCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleFadingCheckIcon = component(Icon)({
  as: OriginalCircleFadingCheckIcon,
}) as Component<"svg", IconProps>
