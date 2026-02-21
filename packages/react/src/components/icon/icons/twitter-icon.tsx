"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Twitter as OriginalTwitterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TwitterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TwitterIcon = component(Icon)({
  as: OriginalTwitterIcon,
}) as Component<"svg", IconProps>
