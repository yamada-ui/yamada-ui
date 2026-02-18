"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListCheck as OriginalListCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListCheckIcon = component(Icon)({
  as: OriginalListCheckIcon,
}) as Component<"svg", IconProps>
