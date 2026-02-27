"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListChevronsUpDown as OriginalListChevronsUpDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListChevronsUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListChevronsUpDownIcon = component(Icon)({
  as: OriginalListChevronsUpDownIcon,
}) as Component<"svg", IconProps>
