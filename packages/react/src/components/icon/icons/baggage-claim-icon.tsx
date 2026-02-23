"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BaggageClaim as OriginalBaggageClaimIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BaggageClaimIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BaggageClaimIcon = component(Icon)({
  as: OriginalBaggageClaimIcon,
}) as Component<"svg", IconProps>
