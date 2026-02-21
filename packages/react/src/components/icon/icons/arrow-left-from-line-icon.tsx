"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowLeftFromLine as OriginalArrowLeftFromLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowLeftFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowLeftFromLineIcon = component(Icon)({
  as: OriginalArrowLeftFromLineIcon,
}) as Component<"svg", IconProps>
