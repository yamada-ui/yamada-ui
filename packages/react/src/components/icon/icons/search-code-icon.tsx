"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SearchCode as OriginalSearchCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SearchCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SearchCodeIcon = component(Icon)({
  as: OriginalSearchCodeIcon,
}) as Component<"svg", IconProps>
