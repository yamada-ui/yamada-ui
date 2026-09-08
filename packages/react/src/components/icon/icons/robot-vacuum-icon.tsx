"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RobotVacuum as OriginalRobotVacuumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RobotVacuumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RobotVacuumIcon = component(Icon)({
  as: OriginalRobotVacuumIcon,
}) as Component<"svg", IconProps>
