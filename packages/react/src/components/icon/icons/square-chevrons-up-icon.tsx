"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChevronsUp as OriginalSquareChevronsUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChevronsUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChevronsUpIcon = component(Icon)({
  as: OriginalSquareChevronsUpIcon,
}) as Component<"svg", IconProps>
