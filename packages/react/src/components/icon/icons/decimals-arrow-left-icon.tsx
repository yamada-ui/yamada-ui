"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DecimalsArrowLeft as OriginalDecimalsArrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DecimalsArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DecimalsArrowLeftIcon = component(Icon)({
  as: OriginalDecimalsArrowLeftIcon,
}) as Component<"svg", IconProps>
