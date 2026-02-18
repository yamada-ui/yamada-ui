"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Calculator as OriginalCalculatorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalculatorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalculatorIcon = component(Icon)({
  as: OriginalCalculatorIcon,
}) as Component<"svg", IconProps>
