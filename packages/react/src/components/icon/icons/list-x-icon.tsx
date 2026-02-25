"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListX as OriginalListXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListXIcon = component(Icon)({
  as: OriginalListXIcon,
}) as Component<"svg", IconProps>
