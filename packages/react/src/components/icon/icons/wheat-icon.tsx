"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wheat as OriginalWheatIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WheatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WheatIcon = component(Icon)({
  as: OriginalWheatIcon,
}) as Component<"svg", IconProps>
