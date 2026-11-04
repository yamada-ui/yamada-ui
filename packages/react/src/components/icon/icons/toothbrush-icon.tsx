"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Toothbrush as OriginalToothbrushIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToothbrushIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToothbrushIcon = component(Icon)({
  as: OriginalToothbrushIcon,
}) as Component<"svg", IconProps>
