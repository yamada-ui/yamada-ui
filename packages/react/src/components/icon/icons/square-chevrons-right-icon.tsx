"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronsRight as OriginalSquareChevronsRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronsRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronsRightIcon = component(Icon)({
  as: OriginalSquareChevronsRightIcon,
}) as Component<"svg", IconProps>
