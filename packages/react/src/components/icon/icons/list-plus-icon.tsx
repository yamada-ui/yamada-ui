"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListPlus as OriginalListPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListPlusIcon = component(Icon)({
  as: OriginalListPlusIcon,
}) as Component<"svg", IconProps>
