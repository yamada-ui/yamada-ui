"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignStartVertical as OriginalAlignStartVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignStartVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignStartVerticalIcon = component(Icon)({
  as: OriginalAlignStartVerticalIcon,
}) as Component<"svg", IconProps>
