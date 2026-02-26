"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlaneLanding as OriginalPlaneLandingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlaneLandingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlaneLandingIcon = component(Icon)({
  as: OriginalPlaneLandingIcon,
}) as Component<"svg", IconProps>
