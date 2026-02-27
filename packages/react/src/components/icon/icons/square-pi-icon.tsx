"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePi as OriginalSquarePiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePiIcon = component(Icon)({
  as: OriginalSquarePiIcon,
}) as Component<"svg", IconProps>
