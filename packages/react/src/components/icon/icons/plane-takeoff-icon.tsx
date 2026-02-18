"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlaneTakeoff as OriginalPlaneTakeoffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlaneTakeoffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlaneTakeoffIcon = component(Icon)({
  as: OriginalPlaneTakeoffIcon,
}) as Component<"svg", IconProps>
