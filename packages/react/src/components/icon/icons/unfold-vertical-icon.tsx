"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UnfoldVertical as OriginalUnfoldVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UnfoldVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UnfoldVerticalIcon = component(Icon)({
  as: OriginalUnfoldVerticalIcon,
}) as Component<"svg", IconProps>
