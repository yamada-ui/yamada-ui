"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Activity as OriginalActivityIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ActivityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ActivityIcon = component(Icon)({
  as: OriginalActivityIcon,
}) as Component<"svg", IconProps>
