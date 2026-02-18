"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PocketKnife as OriginalPocketKnifeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PocketKnifeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PocketKnifeIcon = component(Icon)({
  as: OriginalPocketKnifeIcon,
}) as Component<"svg", IconProps>
