"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsRightLeft as OriginalChevronsRightLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsRightLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsRightLeftIcon = component(Icon)({
  as: OriginalChevronsRightLeftIcon,
}) as Component<"svg", IconProps>
