"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BeanOff as OriginalBeanOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BeanOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BeanOffIcon = component(Icon)({
  as: OriginalBeanOffIcon,
}) as Component<"svg", IconProps>
