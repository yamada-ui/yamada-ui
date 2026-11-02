"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronsRight as OriginalCircleChevronsRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronsRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronsRightIcon = component(Icon)({
  as: OriginalCircleChevronsRightIcon,
}) as Component<"svg", IconProps>
