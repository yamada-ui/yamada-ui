"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Table as OriginalTableIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TableIcon = component(Icon)({
  as: OriginalTableIcon,
}) as Component<"svg", IconProps>
