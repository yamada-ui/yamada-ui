"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextAlignJustifyCenter as OriginalTextAlignJustifyCenterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextAlignJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextAlignJustifyCenterIcon = component(Icon)({
  as: OriginalTextAlignJustifyCenterIcon,
}) as Component<"svg", IconProps>
