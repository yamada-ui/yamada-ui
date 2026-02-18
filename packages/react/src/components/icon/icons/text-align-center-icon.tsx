"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextAlignCenter as OriginalTextAlignCenterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextAlignCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextAlignCenterIcon = component(Icon)({
  as: OriginalTextAlignCenterIcon,
}) as Component<"svg", IconProps>
