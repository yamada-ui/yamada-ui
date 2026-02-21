"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleSlash as OriginalCircleSlashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleSlashIcon = component(Icon)({
  as: OriginalCircleSlashIcon,
}) as Component<"svg", IconProps>
