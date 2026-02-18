"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsUpDown as OriginalChevronsUpDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsUpDownIcon = component(Icon)({
  as: OriginalChevronsUpDownIcon,
}) as Component<"svg", IconProps>
