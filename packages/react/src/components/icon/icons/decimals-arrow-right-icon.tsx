"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DecimalsArrowRight as OriginalDecimalsArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DecimalsArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DecimalsArrowRightIcon = component(Icon)({
  as: OriginalDecimalsArrowRightIcon,
}) as Component<"svg", IconProps>
