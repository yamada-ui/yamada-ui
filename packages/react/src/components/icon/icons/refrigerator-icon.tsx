"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Refrigerator as OriginalRefrigeratorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RefrigeratorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RefrigeratorIcon = component(Icon)({
  as: OriginalRefrigeratorIcon,
}) as Component<"svg", IconProps>
