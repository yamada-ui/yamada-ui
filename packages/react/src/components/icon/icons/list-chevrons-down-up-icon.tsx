"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListChevronsDownUp as OriginalListChevronsDownUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListChevronsDownUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListChevronsDownUpIcon = component(Icon)({
  as: OriginalListChevronsDownUpIcon,
}) as Component<"svg", IconProps>
