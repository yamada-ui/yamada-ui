"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Router as OriginalRouterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RouterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RouterIcon = component(Icon)({
  as: OriginalRouterIcon,
}) as Component<"svg", IconProps>
