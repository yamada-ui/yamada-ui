"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsLeft as OriginalChevronsLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsLeftIcon = component(Icon)({
  as: OriginalChevronsLeftIcon,
}) as Component<"svg", IconProps>
