"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircuitBoard as OriginalCircuitBoardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircuitBoardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircuitBoardIcon = component(Icon)({
  as: OriginalCircuitBoardIcon,
}) as Component<"svg", IconProps>
