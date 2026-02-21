"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListFilter as OriginalListFilterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListFilterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListFilterIcon = component(Icon)({
  as: OriginalListFilterIcon,
}) as Component<"svg", IconProps>
