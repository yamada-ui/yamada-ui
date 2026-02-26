"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Drama as OriginalDramaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DramaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DramaIcon = component(Icon)({
  as: OriginalDramaIcon,
}) as Component<"svg", IconProps>
