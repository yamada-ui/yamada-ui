"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareFunction as OriginalSquareFunctionIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareFunctionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareFunctionIcon = component(Icon)({
  as: OriginalSquareFunctionIcon,
}) as Component<"svg", IconProps>
