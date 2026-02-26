"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareUser as OriginalSquareUserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareUserIcon = component(Icon)({
  as: OriginalSquareUserIcon,
}) as Component<"svg", IconProps>
