"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Variable as OriginalVariableIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VariableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VariableIcon = component(Icon)({
  as: OriginalVariableIcon,
}) as Component<"svg", IconProps>
