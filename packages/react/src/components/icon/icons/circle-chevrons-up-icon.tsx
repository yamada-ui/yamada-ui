"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronsUp as OriginalCircleChevronsUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronsUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronsUpIcon = component(Icon)({
  as: OriginalCircleChevronsUpIcon,
}) as Component<"svg", IconProps>
