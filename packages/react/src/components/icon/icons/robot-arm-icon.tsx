"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RobotArm as OriginalRobotArmIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RobotArmIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RobotArmIcon = component(Icon)({
  as: OriginalRobotArmIcon,
}) as Component<"svg", IconProps>
