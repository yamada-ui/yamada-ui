"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScrollText as OriginalScrollTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScrollTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScrollTextIcon = component(Icon)({
  as: OriginalScrollTextIcon,
}) as Component<"svg", IconProps>
