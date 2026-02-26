"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pentagon as OriginalPentagonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PentagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PentagonIcon = component(Icon)({
  as: OriginalPentagonIcon,
}) as Component<"svg", IconProps>
