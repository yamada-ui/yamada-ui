"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronsLeft as OriginalCircleChevronsLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronsLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronsLeftIcon = component(Icon)({
  as: OriginalCircleChevronsLeftIcon,
}) as Component<"svg", IconProps>
