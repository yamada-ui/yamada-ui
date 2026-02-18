"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StretchVertical as OriginalStretchVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StretchVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StretchVerticalIcon = component(Icon)({
  as: OriginalStretchVerticalIcon,
}) as Component<"svg", IconProps>
