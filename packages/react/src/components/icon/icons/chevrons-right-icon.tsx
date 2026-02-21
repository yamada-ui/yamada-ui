"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsRight as OriginalChevronsRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsRightIcon = component(Icon)({
  as: OriginalChevronsRightIcon,
}) as Component<"svg", IconProps>
