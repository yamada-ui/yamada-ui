"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TableProperties as OriginalTablePropertiesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TablePropertiesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TablePropertiesIcon = component(Icon)({
  as: OriginalTablePropertiesIcon,
}) as Component<"svg", IconProps>
