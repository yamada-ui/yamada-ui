"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsDownUp as OriginalChevronsDownUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsDownUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsDownUpIcon = component(Icon)({
  as: OriginalChevronsDownUpIcon,
}) as Component<"svg", IconProps>
