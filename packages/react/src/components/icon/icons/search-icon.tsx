"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Search as OriginalSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SearchIcon = component(Icon)({
  as: OriginalSearchIcon,
}) as Component<"svg", IconProps>
