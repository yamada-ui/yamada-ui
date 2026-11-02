"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronsDown as OriginalCircleChevronsDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronsDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronsDownIcon = component(Icon)({
  as: OriginalCircleChevronsDownIcon,
}) as Component<"svg", IconProps>
