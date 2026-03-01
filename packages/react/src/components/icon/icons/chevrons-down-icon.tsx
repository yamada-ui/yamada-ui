"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronsDown as OriginalChevronsDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronsDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronsDownIcon = component(Icon)({
  as: OriginalChevronsDownIcon,
}) as Component<"svg", IconProps>
