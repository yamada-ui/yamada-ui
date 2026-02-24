"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Torus as OriginalTorusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TorusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TorusIcon = component(Icon)({
  as: OriginalTorusIcon,
}) as Component<"svg", IconProps>
