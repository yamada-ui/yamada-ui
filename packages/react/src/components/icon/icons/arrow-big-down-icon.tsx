"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowBigDown as OriginalArrowBigDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowBigDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowBigDownIcon = component(Icon)({
  as: OriginalArrowBigDownIcon,
}) as Component<"svg", IconProps>
