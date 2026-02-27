"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cherry as OriginalCherryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CherryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CherryIcon = component(Icon)({
  as: OriginalCherryIcon,
}) as Component<"svg", IconProps>
