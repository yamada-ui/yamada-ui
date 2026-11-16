"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SearchExclamationPoint as OriginalSearchExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SearchExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SearchExclamationPointIcon = component(Icon)({
  as: OriginalSearchExclamationPointIcon,
}) as Component<"svg", IconProps>
