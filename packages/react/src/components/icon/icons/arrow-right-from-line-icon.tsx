"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowRightFromLine as OriginalArrowRightFromLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowRightFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowRightFromLineIcon = component(Icon)({
  as: OriginalArrowRightFromLineIcon,
}) as Component<"svg", IconProps>
