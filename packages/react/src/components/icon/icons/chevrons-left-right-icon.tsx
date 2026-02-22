"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsLeftRight as OriginalChevronsLeftRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsLeftRightIcon = component(Icon)({
  as: OriginalChevronsLeftRightIcon,
}) as Component<"svg", IconProps>
