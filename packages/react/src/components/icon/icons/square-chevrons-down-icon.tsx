"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronsDown as OriginalSquareChevronsDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronsDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronsDownIcon = component(Icon)({
  as: OriginalSquareChevronsDownIcon,
}) as Component<"svg", IconProps>
