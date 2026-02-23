"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgePlus as OriginalBadgePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgePlusIcon = component(Icon)({
  as: OriginalBadgePlusIcon,
}) as Component<"svg", IconProps>
