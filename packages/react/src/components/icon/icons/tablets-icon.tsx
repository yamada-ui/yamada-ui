"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tablets as OriginalTabletsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TabletsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TabletsIcon = component(Icon)({
  as: OriginalTabletsIcon,
}) as Component<"svg", IconProps>
