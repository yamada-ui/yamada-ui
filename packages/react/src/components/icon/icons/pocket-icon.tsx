"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pocket as OriginalPocketIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PocketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PocketIcon = component(Icon)({
  as: OriginalPocketIcon,
}) as Component<"svg", IconProps>
