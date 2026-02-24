"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bean as OriginalBeanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BeanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BeanIcon = component(Icon)({ as: OriginalBeanIcon }) as Component<
  "svg",
  IconProps
>
