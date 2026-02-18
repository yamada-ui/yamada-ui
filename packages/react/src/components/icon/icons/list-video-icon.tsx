"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListVideo as OriginalListVideoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListVideoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListVideoIcon = component(Icon)({
  as: OriginalListVideoIcon,
}) as Component<"svg", IconProps>
