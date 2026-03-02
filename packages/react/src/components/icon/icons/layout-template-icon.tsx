"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutTemplate as OriginalLayoutTemplateIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutTemplateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutTemplateIcon = component(Icon)({
  as: OriginalLayoutTemplateIcon,
}) as Component<"svg", IconProps>
