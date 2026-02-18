"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StepBack as OriginalStepBackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StepBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StepBackIcon = component(Icon)({
  as: OriginalStepBackIcon,
}) as Component<"svg", IconProps>
