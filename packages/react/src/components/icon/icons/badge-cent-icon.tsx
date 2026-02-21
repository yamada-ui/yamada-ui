"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeCent as OriginalBadgeCentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeCentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeCentIcon = component(Icon)({
  as: OriginalBadgeCentIcon,
}) as Component<"svg", IconProps>
