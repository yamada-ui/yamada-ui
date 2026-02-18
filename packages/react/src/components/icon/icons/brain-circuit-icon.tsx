"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BrainCircuit as OriginalBrainCircuitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrainCircuitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrainCircuitIcon = component(Icon)({
  as: OriginalBrainCircuitIcon,
}) as Component<"svg", IconProps>
