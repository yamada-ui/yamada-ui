"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SearchX as OriginalSearchXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SearchXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SearchXIcon = component(Icon)({
  as: OriginalSearchXIcon,
}) as Component<"svg", IconProps>
