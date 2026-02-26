"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Milestone as OriginalMilestoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MilestoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MilestoneIcon = component(Icon)({
  as: OriginalMilestoneIcon,
}) as Component<"svg", IconProps>
