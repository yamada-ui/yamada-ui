"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePile as OriginalCirclePileIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CirclePileIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CirclePileIcon = component(Icon)({
  as: OriginalCirclePileIcon,
}) as Component<"svg", IconProps>
