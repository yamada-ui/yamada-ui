"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextAlignStart as OriginalTextAlignStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextAlignStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextAlignStartIcon = component(Icon)({
  as: OriginalTextAlignStartIcon,
}) as Component<"svg", IconProps>
