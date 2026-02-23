"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSigma as OriginalSquareSigmaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareSigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareSigmaIcon = component(Icon)({
  as: OriginalSquareSigmaIcon,
}) as Component<"svg", IconProps>
