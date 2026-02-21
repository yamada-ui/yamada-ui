"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextSearch as OriginalTextSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextSearchIcon = component(Icon)({
  as: OriginalTextSearchIcon,
}) as Component<"svg", IconProps>
