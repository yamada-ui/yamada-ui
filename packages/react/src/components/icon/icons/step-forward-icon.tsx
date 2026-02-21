"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StepForward as OriginalStepForwardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StepForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StepForwardIcon = component(Icon)({
  as: OriginalStepForwardIcon,
}) as Component<"svg", IconProps>
