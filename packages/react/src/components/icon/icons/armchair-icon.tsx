"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Armchair as OriginalArmchairIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArmchairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArmchairIcon = component(Icon)({
  as: OriginalArmchairIcon,
}) as Component<"svg", IconProps>
