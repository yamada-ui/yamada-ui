"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SearchSlash as OriginalSearchSlashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SearchSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SearchSlashIcon = component(Icon)({
  as: OriginalSearchSlashIcon,
}) as Component<"svg", IconProps>
