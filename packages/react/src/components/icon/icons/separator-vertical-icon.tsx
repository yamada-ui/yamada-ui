"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SeparatorVertical as OriginalSeparatorVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SeparatorVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SeparatorVerticalIcon = component(Icon)({
  as: OriginalSeparatorVerticalIcon,
}) as Component<"svg", IconProps>
