"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareStack as OriginalSquareStackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareStackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareStackIcon = component(Icon)({
  as: OriginalSquareStackIcon,
}) as Component<"svg", IconProps>
