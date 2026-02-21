"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListStart as OriginalListStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListStartIcon = component(Icon)({
  as: OriginalListStartIcon,
}) as Component<"svg", IconProps>
