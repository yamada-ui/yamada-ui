"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsUp as OriginalChevronsUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsUpIcon = component(Icon)({
  as: OriginalChevronsUpIcon,
}) as Component<"svg", IconProps>
