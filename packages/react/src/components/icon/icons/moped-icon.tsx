"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Moped as OriginalMopedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MopedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MopedIcon = component(Icon)({
  as: OriginalMopedIcon,
}) as Component<"svg", IconProps>
