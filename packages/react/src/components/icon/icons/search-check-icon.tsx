"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SearchCheck as OriginalSearchCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SearchCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SearchCheckIcon = component(Icon)({
  as: OriginalSearchCheckIcon,
}) as Component<"svg", IconProps>
