"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareCode as OriginalSquareCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareCodeIcon = component(Icon)({
  as: OriginalSquareCodeIcon,
}) as Component<"svg", IconProps>
