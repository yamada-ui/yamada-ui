"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Motorbike as OriginalMotorbikeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MotorbikeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MotorbikeIcon = component(Icon)({
  as: OriginalMotorbikeIcon,
}) as Component<"svg", IconProps>
