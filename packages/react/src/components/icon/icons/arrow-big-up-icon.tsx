"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigUp as OriginalArrowBigUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigUpIcon = component(Icon)({
  as: OriginalArrowBigUpIcon,
}) as Component<"svg", IconProps>
